#include "Python.h"
#include <stdlib.h>
#include <string.h>
#include "sonic.h"
#include "wave.h"

#define BUFFER_SIZE 2048
PyDoc_STRVAR(sonic_module_doc,
             "This modules provides support for the libsonic API.\n"
             "\n");
#if 0
void runSonic(char* inFileName, char* outFileName, float speed,
                     float pitch, float rate, float volume,
                     int emulateChordPitch, int quality,
                     int enableNonlinearSpeedup, int computeSpectrogram,
                     int numRows, int numCols) {
#endif
static PyObject * runSonic(PyObject *self, PyObject *args){
  char* inFileName;
  char* outFileName;
  float speed;
  float pitch;
  float rate;
  float volume;
  int emulateChordPitch;
  int quality;
  int enableNonlinearSpeedup;
  int computeSpectrogram;
  int numRows;
  int numCols;
#if 0
  if (!PyArg_ParseTuple(args,"ss|ffffiiiiii", &inFileName, &outFileName, &speed, &pitch, &rate,&volume,
	&emulateChordPitch,&quality,&enableNonlinearSpeedup,&computeSpectrogram,&numRows,&numCols))
        return NULL;
#endif
  waveFile inFile, outFile;
  sonicStream stream;
  short inBuffer[BUFFER_SIZE], outBuffer[BUFFER_SIZE];
  int sampleRate, numChannels, samplesRead, samplesWritten;
  if (!PyArg_ParseTuple(args,"ss|ffffiiiiii", &inFileName, &outFileName, &speed, &pitch, &rate,&volume,
        &emulateChordPitch,&quality,&enableNonlinearSpeedup,&computeSpectrogram,&numRows,&numCols))
        return NULL;
  inFile = openInputWaveFile(inFileName, &sampleRate, &numChannels);
  if (inFile == NULL) {
    fprintf(stderr, "Unable to read wave file %s\n", inFileName);
    return NULL;
    //exit(1);
  }
  if (!computeSpectrogram) {
    outFile = openOutputWaveFile(outFileName, sampleRate, numChannels);
    if (outFile == NULL) {
      closeWaveFile(inFile);
      fprintf(stderr, "Unable to open wave file %s for writing\n", outFileName);
      return NULL;
      //exit(1);
    }
  }
  stream = sonicCreateStream(sampleRate, numChannels);
  sonicSetSpeed(stream, speed);
  sonicSetPitch(stream, pitch);
  sonicSetRate(stream, rate);
  sonicSetVolume(stream, volume);
  sonicSetChordPitch(stream, emulateChordPitch);
  sonicSetQuality(stream, quality);
#ifdef SONIC_SPECTROGRAM
  if (computeSpectrogram) {
    sonicComputeSpectrogram(stream);
  }
#endif  /* SONIC_SPECTROGRAM */
  do {
    samplesRead = readFromWaveFile(inFile, inBuffer, BUFFER_SIZE / numChannels);
    if (samplesRead == 0) {
      sonicFlushStream(stream);
    } else {
      sonicWriteShortToStream(stream, inBuffer, samplesRead);
    }
    if (!computeSpectrogram) {
      do {
        samplesWritten = sonicReadShortFromStream(stream, outBuffer,
                                                  BUFFER_SIZE / numChannels);
        if (samplesWritten > 0 && !computeSpectrogram) {
          writeToWaveFile(outFile, outBuffer, samplesWritten);
        }
      } while (samplesWritten > 0);
    }
  } while (samplesRead > 0);
#ifdef SONIC_SPECTROGRAM
  if (computeSpectrogram) {
    sonicSpectrogram spectrogram = sonicGetSpectrogram(stream);
    sonicBitmap bitmap =
        sonicConvertSpectrogramToBitmap(spectrogram, numRows, numCols);
    sonicWritePGM(bitmap, outFileName);
    sonicDestroyBitmap(bitmap);
  }
#endif  /* SONIC_SPECTROGRAM */
  sonicDestroyStream(stream);
  closeWaveFile(inFile);
  if (!computeSpectrogram) {
    closeWaveFile(outFile);
  }
  return Py_None;
}
PyDoc_STRVAR(sonic_indexes_doc,
"runSonic()\n\
\n\
run sonic vcs algorithm.");

static PyMethodDef sonic_methods[] = {
    { "runSonic", (PyCFunction)runSonic, METH_VARARGS, sonic_indexes_doc},
    { 0, 0 },
};
static struct PyModuleDef sonic_module = {
    PyModuleDef_HEAD_INIT,
    "sonic",
    sonic_module_doc,
    -1,
    sonic_methods,
    0,  /* m_reload */
    0,  /* m_traverse */
    0,  /* m_clear */
    0,  /* m_free */
};
PyObject *PyInit_sonic(void)
{
	PyObject *m;
	PyEval_InitThreads();
	
	m = PyModule_Create(&sonic_module);
    	if (!m)
        	return NULL;

	return m;
}
