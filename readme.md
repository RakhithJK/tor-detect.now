<h1 align="center">tor-detect.now</h1>

<p align="center">A minimal service to check whether a visitor is running behing Tor.</p>

---

<p align="center">
	<sub>Visit <a href="https://tor-detect.now.sh"><code>tor-detect.now.sh</code></a> for a live demo. Check out my <a href="https://nikolaskama.me">blog</a> and follow me on <a href="https://twitter.com/nikolaskama">Twitter</a>.</sub>
</p>


<br>

# Installation & Configuration

Clone the repository and install all dependencies by running:

```
~ ❯❯❯ git clone https://github.com/k4m4/tor-detect.now
~ ❯❯❯ cd tor-detect.now/
~/tor-detect.now ❯❯❯ npm install
```

Subsequently, create a `.env` file and declare a variable called `SECRET` (for session security purposes):

```
~/tor-detect ❯❯❯ echo "SECRET=[your-secret-goes-here]" > .env
~/tor-detect ❯❯❯ npm start
```

You can then access the service by navigating to [`localhost:3000`](http://localhost:3000/).


<br>

# Deployment

First, [download `now-cli`](https://zeit.co/download):

```
~ ❯❯❯ npm install -g now-cli
```

Then, run `now` from *within* the directory of `Tor-Detect.Now`:

```
~/tor-detect.now ❯❯❯ now
```


<br>

# Related

- [tor-detect](https://github.com/k4m4/tor-detect) - Detect whether an IP address belongs to a Tor exit node.


<br>

# License

Copyright (c) 2018 by Nikolaos Kamarinakis. Some rights reserved.

`Tor-Detect.Now` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).

For more information on this project you can go ahead and email me anytime at **nikolaskam{at}gmail{dot}com**.