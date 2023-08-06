# python gantt lib

This project is an extension of the `python-gantt`module, providing some extra functionality.
This includes some translation to spanish of the days and months, new classes for add hyperlinks to the tasks and projects, and svg in format string for using it as context in Django lib.

## Instalation

Run the following to install:

```python
pip install gantt-lib-lautarodapin
```

## Aditional requirements

* python-gantt see `https://pypi.org/project/python-gantt/`
* Author: Alexandre Norman (norman at xael.org)
 

## Usage
```python

import gantt_lib
resource = gantt_lib.Resource("Resource 1")

project = gantt_lib.HiperLinkedProject(name='Project', link='mypage/link/to/project')

project.add_task(gantt_lib.HyperLinkedTask(
    name= 'task 1',
        start=datetime.datetime.date(2020,7,1),
        duration=5,
        resources=[resource],
        percent_done=0,
        color="#03d529",
        link_name='mypage/link/to/title,
        link_resource='mypage/link/to/resource,
        link_lateral='mypage/link/to/extra
    )
)

# make_svg_for_task returns the xml code in string format, this way you can use it as context in django or flask
# also saves it into a file
svg = project.make_svg_for_tasks(
        'file.svg', 
        today=datetime.date(2020,7,15), 
        start=datetime.date(2020,7,1), 
        end=datetime.date(2020,7,20)
        )



```

## Author

Lautaro Dapino

