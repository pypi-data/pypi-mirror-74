# SMTP_PyPi_Package
 - SMTP Helper functions. Only uses Standard Library. 
 
#### email_without_attachment: Send email without attachments.
```python

def email_without_attachment(message: str, subject: str, to_list: str, cc_list: str, login: str, password: str):
    """
    :param message: HTML String with Email message contained. See Examples/Email_Strings.py
    :param subject: Subject String
    :param to_list: Semicolon separated list of email addresses. (ex - a@abc.com; b@abc.com; c@abc.com;)
    :param cc_list: Semicolon separated list of email addresses. (ex - a@abc.com; b@abc.com; c@abc.com;)
    :param login: Login email. 
    :param password: Password for O365
    """
```
##### Example Call 
```python
from smtputility import email_without_attachment
test_message = """
<HTML>
    <BODY>
     Message Text
     <br>
    </BODY>
</HTML>
"""

email_without_attachment(test_message,'SMTP Testing','a@abc.com;b@abc.com;','c@abc.com','email@domain.com','password')

```

#### email_with_attachments: Send email with attachments. Can send any number/type of attachments in email. 
```python

def email_with_attachments(
        message: str, subject: str, to_list: str, cc_list: str, login: str, password: str, *args
):
    """ 
        :param login: Login email. 
        :param password: Password for O365.
        :param message: HTML String with Email message contained. See Examples/Email_Body.html.
        :param subject: Subject String
        :param to_list: Semicolon separated list of email addresses. (ex - a@abc.com; b@abc.com; c@abc.com;)
        :param cc_list: Semicolon separated list of email addresses. (ex - a@abc.com; b@abc.com; c@abc.com;)
        :param *args: Paths to attachments. 
        """
```
##### Example Call 
```python
from smtputility import email_with_attachments

test_message = """
<HTML>
    <BODY>
     Message Text
     <br>
    </BODY>
</HTML>
"""

email_with_attachments(test_message,'SMTP Testing','a@abc.com;b@abc.com;','c@abc.com','email@domain.com','password',
r'C:\Users\user\some_directory\test_1.txt')
```

#### notify_error: Automated email report for use in exception catch. 
```python
def notify_error(report_name, error_log, to_list: str,login: str, password: str):
    """

    :param to_list: List of emails to receive notification.
    :param report_name: Name of automated report.
    :param error_log: Raised exception or other error to report.
    :param login: Login email. 
    :param password: Password for O365
    """
```
##### Example Call
```python
from smtputility import notify_error
import os
def foo():
    raise Exception('Error!')
try:
    foo()
except Exception as e:
    notify_error(f"{os.path.basename(__file__)}", e, "a@email.com",'email@domain.com','password')
```


#### notify_error: Automated email report for use in exception catch. 
```python
def default_table_style(df):
    """ Apply a default clean table style to pandas df.to_html() for use in email strings.

    :param df: Dataframe to apply the style to.
    :type df: Pandas Dataframe
    :return: HTML string for insertion in email.
    :rtype: string
    """
```
##### Example Call
```python
from smtputility import default_table_style
import pandas as pd
import numpy as np
df = pd.DataFrame(np.random.randint(0,100,size=(15, 4)), columns=list('ABCD'))
html_df_string = default_table_style(df)
#Example in email string
test_message = f"""
<HTML>
    <BODY>
     {html_df_string}
     <br>
    </BODY>
</HTML>
"""
```