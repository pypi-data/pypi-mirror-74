Hocron
=======================

Hocron provides an API over HOCR file format.

## Installation

    pip install hocron

## Prepare Development Environment & Run Tests
    
1. virtualenv .venv -p /usr/bin/python3.8  # provide virtualenv path to 3.8 interpreter
2. source .venv/bin/activate  # activate .venv virtual environment
3. pip install -r requirements.txt # install dependencies
4. python setup.py develop  # provide a link to dev version of hocron
5. python test/run.py

## Usage

Example:
    
    from hocron import Hocron, LinePattern

    # define a line pattern
    line_pattern = LinePattern([
        'EUR',
        re.compile('\d+[\.,]+\d\d$')
    ])
    
    hocron_inst = Hocron(hocr_as_str)
    
    value = hocron_inst.get_labeled_value(line_pattern)
    
Hocron class receives as argument a string. It expects that string
to in a valid hOCR format.


## References

hOCR is an open standard of data representation for formatted text obtained from optical character recognition (OCR).

* [hOCR format specifications](http://kba.cloud/hocr-spec/1.2/)
* [Article on Wikipedia](https://en.wikipedia.org/wiki/HOCR)