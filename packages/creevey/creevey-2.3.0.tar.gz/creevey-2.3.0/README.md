# Creevey

> **Note 6/15/20:** Our team previously had a tradition of naming projects with terms or characters from the Harry Potter series, but we are disappointed by J.K. Rowling’s persistent transphobic comments. In response, we will be renaming this repository, and are working to develop an inclusive solution that minimizes disruption to our users.

Creevey is a file processing framework. It is designed for IO-bound workflows that involve reading files into memory, doing some processing on their contents, and writing out the results. It makes running those workflows faster and more reliable by parallelizing them across files, optional skipping files that have already been processed, handling errors, and keeping organized records of what happened.

Creevey was developed for deep learning computer vision projects, so in addition to the general framework it also provides predefined components for image processing. However, it can be used for any project that involves processing data from many sources.

See [the docs](https://creevey.readthedocs.io/) for more details.
