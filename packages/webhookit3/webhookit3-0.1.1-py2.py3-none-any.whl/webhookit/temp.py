# -*- coding: utf-8 -*-
'''
Created on 2017-03-03

@author: hustcc
'''
import datetime


CONFIG_TEMP = """# -*- coding: utf-8 -*-
'''
Created on %s

@author: hustcc/webhookit
'''


# This means:
# When get a webhook request from `repo_name` on branch `branch_name`,
# will exec SCRIPT on servers config in the array.
WEBHOOKIT_CONFIGURE = {
    # a web hook request can trigger multiple servers.
    'repo_name/branch_name': [{
        # if exec shell on local server, keep empty.
        'HOST': '',  # will exec shell on which server.
        'PORT': '',  # ssh port, default is 22.
        'USER': '',  # linux user name
        'PWD': '',  # user password or private key.

        # The webhook shell script path.
        'SCRIPT': '/home/hustcc/exec_hook_shell.sh'
    }]
}""" % datetime.datetime.now().strftime('%b-%d-%y %H:%M:%S')


INDEX_HTML_TEMP = '''
<html>
<head>
  <title>hustcc/webhookit: Simple git webhook cli tool for automation tasks.</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="keywords" content="hustcc, github, gitlab, gogs, gitosc, git-webhook, webhookit" />
  <meta name="description" content="webhookit is a simple git webhook cli tool for automation tasks with simple web gui, github, gitlab, gogs, gitosc are supported." />
  <link rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUREQEJJU0JJU0JJU0JJU0JJU0JJUkNJUUNIUEJJU0JJU0JJUxF2VDUAAAAMdFJOUwP7g0WeZDIeE8bds9k71KMAAABgSURBVAjXY2BAAIsCKCNpO5hibuBcDWZUKCQJBrABGerORhOFWYCMbitLLUFFoHoORxGhiYIewUBNgkAg5cXAIumkGhpsOoUhqgFqnBPMAm0YozA4AcJg2yhpABWDWA4ArZ0P7hwi9EMAAAAASUVORK5CYII="/>
  <style type="text/css">
    body {
      max-width: 1000px;
      margin: 30px auto;
      padding: 30px;
    }
    pre {
      background-color: #f6dcd7;
      padding: 10px 15px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    pre.strong {
      font-weight: bold;
    }
    form, form textarea {
      width: 100%;
    }
  </style>
</head>
<body>
  <h1> webhookit </h1>
  <p>
    <a href="https://github.com/hustcc/webhookit">
      <strong>hustcc/webhookit</strong>
    </a> is a simple git webhook cli tool for automation tasks.
  </p>
  <h2> SERVER status </h2>
  <pre>Trigger count <strong id='webhookit_count'>{{count}}</strong>. Last trigger at <strong id='webhookit_date'>{{date or 'None'}}</strong> on <strong id='webhookit_repo'>{{repo or 'None'}}</strong>.</pre>
  <h2> WEBHOOK logs </h2>
  <pre id='webhookit_logs'>{% for log in logs[::-1] %}{{log.get('msg', '')}}<br />{% end %}</pre>
  <h2> WEBHOOK url </h2>
  <pre><strong id="webhookit_url"></strong></pre>
  <h2> WEBHOOK configure </h2>
  <pre>{{config}}</pre>
  <br />
  <script type="text/javascript">
    function _id(id) { return document.getElementById(id); }
    // set webhook_url
    _id("webhookit_url").innerHTML = location.href + "webhookit";

    // websocket
    var ws = new WebSocket("ws://" + location.host + "/ws");
    ws.onmessage = function(e) {
      var msg = JSON.parse(e.data);
      if (msg.type === 'stat') {
        _id("webhookit_count").innerHTML = msg.msg[0];
        _id("webhookit_date").innerHTML = msg.msg[1];
        _id("webhookit_repo").innerHTML = msg.msg[2];
      }
      else if (msg.type === 'log') {
        _id("webhookit_logs").innerHTML = (msg.msg + '<br />') + _id("webhookit_logs").innerHTML;
      }
    }
  </script> 
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <!-- sorry for ad -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-7292810486004926"
       data-ad-slot="7806394673"
       data-ad-format="auto"></ins>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
  </script>

  <p>Code of <a href="https://github.com/hustcc/webhookit">hustcc/webhookit</a> hosted on github. Authored by <a href="https://github.com/hustcc">hustcc</a>.</p>
  <p>Current running version: <a href="/">v{{version}}</a></p>
  <a href="https://github.com/hustcc/webhookit" class="github-corner" aria-label="View source on Github"><svg width="60" height="60" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>
  <span style="display:none">
    <script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1257060683'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/stat.php%3Fid%3D1257060683' type='text/javascript'%3E%3C/script%3E"));</script>
  </span>
</body>
</html>
'''
