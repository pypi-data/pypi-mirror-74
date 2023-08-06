# qpt_generator
An implementation of Question Paper Template Generation Algorithm written in C++ to provide high performance. It uses Cython internally to create python package.

## Introduction
Generation of question papers through a question bank is an important activity in learning management systems and educational institutions. The quality of question paper is based on various design constraints such as whether a question paper assesses different problem solving skills as per Bloom's taxonomy, whether it covers all units from the syllabus of a course and whether it covers various difficulty levels.

I have implemented algorithm written by Vaibhav M. Kale and Arvind W. Kiwelekar for question paper template generation in C++ to provide fast performance. Implementation is extensible in terms of constriant it support to create question paper template.

The qpt_generator package was motivated by the needs of my academic project [Question Paper Generator](https://github.com/Niraj-Kamdar/question-paper-generator).

## Installation
You can install qpt_generator using easy_install with following command:
```console
pip install qpt-generator
```
or
```console
easy_install qpt-generator
```
## Usage
After installing module, you can import it using following command:
```python
from qpt_generator import QPTGenerator
```
You have to provide two inputs to the constructor of QPTGenerator:
  1. A dictionary of constraints and lists of distribution of mark</br>
     Ex: if you want to generate paper with 4 constraint: 
  - Unit-wise distribution of marks
  - Difficulty level-wise distribution of marks
  - Cognitive level-wise distribution of marks
  - Question-wise distribution of marks
  2. A list of question no. associated with list of question-wise mark distributions. Repitition of same question no. indicates subquestions of that question.

Output will be generated when you call generate method of the QPTGenerator class. Here, output is a dictionary of list of the alloted unit, cognitive level, difficulty and mark by question no. 

```python
from qpt_generator import QPTGenerator
mark_distributions = {
    "question": [5, 5, 10, 4, 6, 5, 5],
    "unit": [8, 8, 8, 5, 11],
    "difficulty": [13, 15, 12],
    "cognitive": [12, 18, 10],
}
question_no = [1, 1, 2, 3, 3, 4, 4]
qpt = QPTGenerator(mark_distributions, question_no)
output = qpt.generate()

# output = {'cognitive': [2, 3, 2, 3, 3, 1, 3, 1, 1, 2],
#           'difficulty': [3, 1, 2, 2, 1, 3, 3, 1, 2, 3],
#           'question': [5, 5, 8, 2, 2, 1, 1, 6, 5, 5],
#           'question_no': [1, 1, 2, 2, 3, 3, 3, 3, 4, 4],
#           'unit': [4, 5, 1, 3, 2, 2, 3, 5, 2, 3]}
```
To satisfy all given constraints: 
question 1 should have 2 subquestions: 
- first question should have cognitive_level = 2, difficulty = 3, unit no.= 4 and mark = 5
- second question should have cognitive_level = 3, difficulty = 1, unit no.= 5 and mark = 5

You can randomly select this kind of questions from your question bank database if it exists. 

## References
1) [An Algorithm for Question Paper Template
Generation in Question Paper Generation System](https://ieeexplore.ieee.org/document/6557281?arnumber=6557281&tag=1)
