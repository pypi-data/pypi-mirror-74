# slides-sound
A set of tools for generating slide shows from images with improvised sound tracks.

This is a project that I've been working on off and on, I'd like to eventually turn it into a web service to allow folks to upload or point to images and then generate the slideshows. The image processing and the music generation is very simplistic and definitely a work in progress.

Slides
==================================================================================

Slides is a program which will take a list of image files either specified by wildcard or by an input file list specified by --file option and create a slideshow as a mp4 video file. If used with the music script the file can also have an improvised sound track based on a chord progression. The script automatically rotates and resizes the images to make them consistent. 

    Usage: slides [options] [path with wildcard to the images]
    
    A tool to create slide show videos from a set of photos
    
    Options:
      -h, --help            show this help message and exit
      -f FILE, --file=FILE  Read image file paths from a file one full path per
                            line
      -m MUSIC, --music=MUSIC
                            Read music chords from file
      -v, --verbose         Log all activity to console
      -d, --dontclean       Don't clean up intermediate files to allow for
                            debugging
      -x WIDTH, --width=WIDTH
                            Width of slide show (default 320)
      -y HEIGHT, --height=HEIGHT
                            Height of slide show (default 240)

Music
=================================================================================

Music is a program that takes a set of music input files and creates an improvisation based on the input files. The general idea is that it tries to choose a technique and a direction for some number of bars and then applies that technique, it uses linear runs and arpegiation so far. It currently has very simplistic accompanyment in the form of simple bass line and punching chords. It needs lots of work and rewriting, but it's starting to form a framework.


    Usage: music [options]
    
    A tool to create improvised music based on chord progression, and/or melody
    and rhythm
    
    Options:
      -h, --help            show this help message and exit
      -c CHORDS, --chords=CHORDS
                            Read chord progression from file
      -m MELODY, --melody=MELODY
                            Read melody from file
      -r RHYTHM, --rhythm=RHYTHM
                            Read rhythm from file
      -n CHORUS, --chorus=CHORUS
                            Number of choruses
      -t TIME, --time=TIME  Total seconds to generate music for
      -o OUTPUT, --output=OUTPUT
                            Output file to save music
      -b BPM, --bpm=BPM     Beats per minute for tempo
      -s, --swing           Swing the notes in the improvisation
      -d DELTAS, --deltas=DELTAS
                            Read the stream of delta values to generate melody
                            from file
      -v, --verbose         Log all activity to console
      -D, --debug           save debug versions of the parts
      -S SAMPLES, --samples=SAMPLES
                            Add path to additional voice with samples
      -V VOICES, --voices=VOICES
                            Voice numbers
                            {chord_voice},{melody_voice},{rhythm_voice}
    
Music input files look like this:

    [
    C("F3Maj",1),C("F3Maj",1),C("F3Maj",1),C("Bb3Maj",1),
    C("Bb3Maj",1),C("Bb3Maj",1),C("Bb3Maj",1),C("Bb3Maj",1),
    C("Bb3Maj",1),C("Bb3Maj",1),C("Bb3Maj",1),C("Bb3Maj",1),
    C("G3Min",1),C("Eb3Maj",1),C("Eb3Maj",1),C("Eb3Maj",1),C("Eb3Maj",1),C("Eb3Maj",1),
    C("A3Maj",1),C("F3Maj",1),C("F3Maj",1),C("F3Maj",1),C("D3Min",1),C("Bb3Maj",1),C("Bb3Maj",1), C("Bb3Maj",1), C("Bb3Maj",1), C("Bb3Maj",1),
    C("G3Min",1),C("Eb3Maj",1),C("Eb3Maj",1),C("Eb3Maj",1),C("Eb3Maj",1),C("Eb3Maj",1),
    C("A3Maj",1),C("F3Maj",1),C("F3Maj",1),C("F3Maj",1),C("D3Min",1),C("Bb3Maj",1),C("Bb3Maj",1), C("Bb3Maj",1), C("Bb3Maj",1), C("Bb3Maj",1),
    C("G3Min",1),C("Eb3Maj",1),C("Eb3Maj",1),C("Eb3Maj",1),C("Eb3Maj",1),C("Eb3Maj",1),
    C("A3Maj",1),C("F3Maj",1),C("F3Maj",1),C("F3Maj",1),C("D3Min",1),C("Bb3Maj",1),C("Bb3Maj",1), C("Bb3Maj",1), C("Bb3Maj",1), C("Bb3Maj",1),
    C("G3Min",1),C("Eb3Maj",1),C("Eb3Maj",1),C("Eb3Maj",1),C("Eb3Maj",1),C("Eb3Maj",1),
    C("A3Maj",1),C("F3Maj",1)
    ]

The syntax is a list initialization in Python, the C class represents a chord  C( name, value ) where name is "{Key}{octave}{Maj|Min|7|Maj7|Min7|Min6|Min7b5|-Maj7|7b9|7#11}", the N class represents a note N( name, value ) where name is "{Key}{octave}. In both cases value is 1 for whole note, 2 for half note, 4 for quarter note, 8 for eighth note. 

Here's an example of a melody line encoded in this way, note the *3 at the end this creates 3 copies of the preceding list and thus three choruses:
    [
    N("G#3",4),N("G#3",4),N("E3",4),N("F#3",4),N("R",8),N("G#3",4),N("E3",8),N("G#3",4),N("E3",8),N("E3",8),
    N("E3",1),N("R",2),N("R",4),N("E3",8),N("F#3",8),
    N("G3",4),N("G3",4),N("E3",4),N("F#3",4),N("R",8),N("G3",4),N("E3",8),N("G3",4),N("F#3",4),
    N("E3",1),N("R",2),N("R",4),N("E3",8),N("E3",8),
    N("F#3",4),N("D#2",4),N("B2",8),N("B2",4.5),N("R",8),N("G3",4),N("E3",8),N("G3",4),N("F#3",4),
    N("E3",1),N("R",1)
    ] * 3

There are sound samples included, these come from public domain sources. ssamples is a sampled piano gsamples and gsamples1 were generated from public sound fonts.



