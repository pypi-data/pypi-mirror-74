![](images/standup-notes.png)

A simple way to capture notes for your daily standup meetings.

https://mikemartino.github.io/standup_notes/

## Installation
### From source

```
python3 -m pip install pipenv 
python3 setup.py install --user
```
### From PyPi

```
pip3 install standup-notes
```
### Bash Setup

To have bash completion, find where the ```standup-notes.bash``` file is in your system by running the following command
```
pip3 show standup-notes
```
Under the ```Location: ``` tab, this is where the resoruces folder is located which contains ```standup-notes.bash```.
Run the following command to copy the bash completion script to the correct directory
```
cp /path/to/resources/standup-notes.bash /etc/bash_completion.d/
```
## Commands
#### Day Flags
```
--yesterday
--today
--tomorrow
```
Pass the flags to the read, copy and edit execution to manipulate their respectives standup-notes
#### List
 ```
standup-notes --l
standup-notes --list
 ``` 
 will list commands that can be run by the script
#### Read
 ```
standup-notes --r
standup-notes --read
 ``` 
will print out the stand up note based on the date flag passed
#### Copy
```
standup-notes -c
standup-notes --copy
```
will copy the standup-notes to the date selected to your clipboard
#### Edit
```
standup-notes -e
standup-notes --edit
```
will edit the note selected based on date flagged passed
Passing the copy argument will allow you to copy the previous days "What I did Today" into "What I did yesterdays" section of that days note
```
standup-notes -e --today -c 
standup-notes -edit --today --copy
```


#### Delete Notes
```
standup-notes -d
standup-notes --delete
```
Deletes all notes that are older then the date inputted, format of date input shown below
```
standup-notes -d YYYY-MM-DD
standup-notes -d 2020-05-05
```
This will delete any notes older then May 5th 2020

#### Post Notes
```
standup-notes -p
standup-notes --post
```
This will post the standup-notes based on date flagged passed
```
standup-notes -p --today
standup-notes --post --tomorrow
```

##### I hate typing my name and the URL every time
To save your name and the URL of the MS Teams Webhook:
1. `vim $(pip3 show standup_notes | grep 'Location' | cut -c11-)/standup_notes/resources/config.json`
2. Add your name and the connectorURL or the channel you want to post your notes to.


##### Create an incoming webhook

1. Navigate to the channel where you want to add the webhook and select (•••) More Options from the top navigation bar.
2. Choose Connectors from the drop-down menu and search for Incoming Webhook.
3. Select the Configure button, provide a name, and, optionally, upload an image avatar for your webhook.
4. The dialog window will present a unique URL that will map to the channel. Make sure that you copy and save the URL—you will need to provide it to the outside service.
5. Select the Done button. The webhook will be available in the team channel.

For more information on webhooks please visit https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook
# Why? Why not?

__Tired__ of opening `nano` on your own?

__Forget__ if you like headings or italics for your standup section titles?

__Stuck__ in that weird `VISUAL MODE` in `vim` where you can't right-click copy and paste your notes into chat? Looking like a tool, because you aren't using the right ones.


***

_**Well, no more.**_

`standup-notes` to the rescue.

***

## Brag hard about your $EDITOR selection
 
Set your `$EDITOR` environment variable (in your __.bashrc__) to tell `standup-notes` and your friends, 

> "Yo playa', I use __X__ to edit my files. Like a boss!" 

## Only chumps right-click to _Copy and Paste_

You heard me. And I know you're no chump. Use `standup-notes` to seamlessly `--copy-today`'s notes and by ready for that meeting on the fly. So fly.

## I have kids. I don't sleep. My brain is basically just scrambled eggs. I use templates.

Get to the point. I can't remember what I like (italics vs. headings). I just do what my template tells me. 

Don't waste time with that cookie cutter garbagio. Get straight to the content. Leave the boilerplate to the tool. 
