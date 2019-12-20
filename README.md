# drex

Docusaurus template for my Open Source projects.

## Step 1: Clone this project and switch to a `source` branch

_(If you are not creating an organization page read the bottom note)_

## Step 2: Replace these template strings

Use your editor's **find all in path tool** to replace these template strings.
_All template strings to be replaced are in `SCREAMING_SNAKE_CASE` and start with `YOUR`._

_Check that no template strings remain after completing this list by searching for `YOUR` with your IDE._

- [ ] `YOUR_SOLVED_PROBLEM`: An uncapitalized phrase that describes what you project "makes it easy to" (no period)
  - Examples: clean your house, walk your dog, find your keys
- [ ] `YOUR_APP_TITLE`: A title for your app (It will be displayed throughout the site.)
  - Examples: Tinder, Discord, Amazon Games
- [ ] `YOUR_APP_TAGLINE`: A tagline for your app
  - Examples: Tinder for dogs, Clear your mind after a long day
- [ ] `YOUR_ORGANIZATION_NAME`: Your Github organization name
  - Examples: facebook, google
- [ ] `YOUR_GITHUB_PROJECT`: The Github project your documentation is for. (Not the repo the docs are hosted in)
  - Examples: react, create-react-app

## Step 3: Deploy to pages

Replace: `website/static/img/favicon.ico` & `website/static/img/logo192.png`

## Step 4: Replace images

Run the command: `sudo GIT_USER=YOUR_ORGANIZATION_NAME USE_SSH=false npm run publish-gh-pages`

### If you want to deploy this to a repo's Github page (instead of an organization's page)

- Set `baseUrl` in config to `/YOUR_GITHUB_PROJECT/`
- Instead of moving to a `source` branch, stay on `master`.
