Package that stores HTML within a string variable for scraping purposes

## Installation
```python
pip3 install fetchhtml 

```

## Usage
```python 
from fetchhtml import get_html,find_element_by_attribute_value,save_html
```

## Getting HTML of webpage
```python
# Get HTML page of google.com
google_html = get_html("https://www.google.com")
```

## Print HTML out to console
```python
print(google_html)
```

## Find HTML element in HTML 
```python
target_id = find_element_by_attribute_value(html, id="gbar")
```

## Print the text of target element 
```python
print(target_id[0].text)
```

## Save HTML file
```python
save_html(google_html, "google.html")
```

