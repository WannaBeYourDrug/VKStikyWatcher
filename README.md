# VKStikyWatcher
watch vk page and make some actions on wall update

## Usage

1) Insert contents of script.js in console
2) Run script using `var vksw = new VKSW();` in browser console
3) Never leave victim's page
4) If you need to stop, use `vksw.stop();`

## Config

name | type | default | description
:--:|:--:|:--:|:--:|
own|{Boolean}|true|trigger actions only on own posts
timeout|{Int}|100|timeout between checks in ms
actions|{Array}|[VKSW.actions.comment,VKSW.actions.like]|Actions for new post

## Actions

Actions are functions that do someting with new post

@param {DOMElement} post - element of new post

Default actions:
like - likes new post
comment - writes letter 'a' in comments of new post

Also you can use `VKSW.storage` object to store data

## Disclaimer

For Educational Purposes Only
