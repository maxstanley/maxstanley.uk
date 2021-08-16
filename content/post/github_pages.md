+++
title = "How this Site is hosted."
description = "A brief overview of how maxstanley.uk is hosted."
date = 2021-08-16
tags = [ "blog", "github", "github-pages", "cloudflare", "github-actions" ]
draft = false
+++

## Creating Site Content

One of the primary requirements I had for this site was how I would create the content.
Being someone who always enjoys experimentation and trial and error, being fixed to a certain tools way of writing content always feels too restrictive.
For this reason I wanted to use markdown.
This allows me to write my content once, and reuse it on any number of different platforms that I may choose to display this content on.

Initially, I began writing my own site generator using Go which you can see here [masterful-minimalism](https://github.com/maxstanley/masterful-minimalism).
Part way through development of this I came to learn of Hugo, which was a product with goals identical to my own, however far more matured than what I had hacked together.

### Hugo

[Hugo](https://github.com/gohugoio/hugo)

> Hugo is a static HTML and CSS website generator written in Go. It is optimized for speed, ease of use, and configurability. Hugo takes a directory with content and templates and renders them into a full HTML website.

With this aligning perfectly with the goal of this project I switched immediately.
Using Hugo also allows me to focus more of my effort on creating content that the site visitor will actually see and gain value from, rather than something hidden away from them.

### Templates

Hugo has a wide range of templates already available created by the community that are openly available.
Unfortunately, none of these fit with my minimalist asthetic, so I made the decision to go about creating my own template.

As I was going to be creating my own template I was able to conscider other aspects of the template that I could use to fit with the brand that I wanted to associate myself with.
Whilst I have used JavaScript in the past to create functional WebApps, I often used this as a crutch when creating sites especially when it came down to how they looked.
So to challenge myself I decided that when publishing this site only HTML & CSS would be served to the user.

Limiting myself to HTML & CSS had the additional benefit of enabling this site to become more accessible to visitors who may not have connections speeds that I have come to enjoy.

## Publishing

In most areas of software their is this triple constraint of Good, Cheap & Fast.
For instance Fast & Good probably means it will not come cheap, and Fast & Cheap will likely be of low quality.

### GitHub Pages

Fortunately, GitHub has ticked off all 3 of these in their [GitHub Pages](https://pages.github.com/) offering.
If you store the content of your site in a Public Repository on GitHub then they will serve your website to users for free.

### GitHub Actions

[GitHub Actions](https://github.com/features/actions) allows me to follow the DRY Principles when deploying my site.
Don't Repeat Yourself.
Using GitHub Actions allows me to push my latest content to GitHub, go away to make a cup of coffee, and by the time I am back my new content is available to visitors.

On my repository [maxstanley/maxstanley.uk](https://github.com/maxstanley/maxstanley.uk) I have an action setup so that any time a change is made to the `main` branch, the site content will be:
 - Built using Hugo
 - Pushed to a `gh-pages` branch (This is what is served by GitHub Pages)
 - Cloudflare Cache is flushed (More on this later)

## Improving User Experience with Cloudflare

Whilst GitHub pages is free, I don't want to ever abuse the prvilege I have being able to utilise it.
This is where Cloudflare comes in, not only will Cloudflare reduce the load on GitHub Pages by caching pages so that the request will never even go to GitHub Pages.
Cloudflare will also perform this caching globally, bringing the visitors even closer to a server hosting this site, speeding up page load times.

