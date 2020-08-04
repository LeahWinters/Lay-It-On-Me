# Lay-It-On-Me

<br>

A Mod 3 final project [project](https://frontend.turing.io/projects/module-3/binary-challenge.html). 

## Overview

Lay It On Me was designed to help people get advice when they have no one to turn to. The application allows the user to search for advice using a key word, save advice to view later, and view a random piece of advice.

Lay It On Me uses [The Cocktail Database](https://api.adviceslip.com/). 

## App Demo

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/55927708/89241298-b2960c00-d5bb-11ea-805d-0324a5448a25.gif)
![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/55927708/89241381-effa9980-d5bb-11ea-9084-db90c66ce382.gif)

### Clone This Repo

That's right, _clone_ not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
1. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
1. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
1. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets

Now try to commit something and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

Then install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal. The app should start automatically, and you should see a header with the title Solicited Advice, and a form to search for advice.

## Learning Goals

1. Testing all files, including sad paths
2. Solidify React 
3. Choose free API and utulize it in app
4. SRP and DRY code

### Contributors:

- Léah Winters: https://github.com/LeahWinters
