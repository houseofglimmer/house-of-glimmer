# GitHub Pages Deployment Guide

## Step 1: Install Git

Git is not currently installed on your system. You need to install it first:

1. **Download Git:**
   - Go to: https://git-scm.com/download/win
   - Download the Windows installer
   - Run the installer and use the default settings (just click "Next" on each screen)

2. **Verify installation:**
   - Close and reopen your terminal/command prompt
   - Type: `git --version`
   - You should see a version number

---

## Step 2: Create a GitHub Account

1. Go to: https://github.com
2. Click "Sign up"
3. Create your account (it's free!)
4. Verify your email address

---

## Step 3: Create a New Repository on GitHub

1. After logging into GitHub, click the **"+" icon** in the top right
2. Select **"New repository"**
3. Fill in:
   - **Repository name:** `house-of-glimmer` (or any name you like)
   - **Description:** (optional) "House of Glimmer website"
   - **Visibility:** Choose **Public** (required for free GitHub Pages)
   - **DO NOT** check "Initialize this repository with a README"
4. Click **"Create repository"**

---

## Step 4: Initialize Git in Your Project Folder

Open your terminal/command prompt in your project folder (`D:\projects`) and run these commands:

```bash
# Initialize git repository
git init

# Add all your files
git add .

# Create your first commit
git commit -m "Initial commit: House of Glimmer website"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/house-of-glimmer.git

# Push to GitHub (this will ask for your GitHub username and password)
git branch -M main
git push -u origin main
```

**Note:** When you push, GitHub will ask for your username and password. 
- Username: Your GitHub username
- Password: You'll need a **Personal Access Token** (not your regular password)

---

## Step 5: Create a Personal Access Token

GitHub requires a token instead of passwords:

1. On GitHub, click your profile picture (top right)
2. Go to **Settings**
3. Scroll down and click **Developer settings** (left sidebar)
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token** → **Generate new token (classic)**
6. Name it: "Website Deployment" (or any name)
7. Check the **repo** checkbox (this selects all repository permissions)
8. Scroll down and click **Generate token**
9. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)
10. Use this token as your password when pushing code

---

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu bar)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes, then visit: `https://YOUR_USERNAME.github.io/house-of-glimmer/`

---

## Step 7: Future Updates

Whenever you make changes to your website:

```bash
git add .
git commit -m "Description of your changes"
git push
```

Your website will update automatically within a few minutes!

---

## Quick Reference Commands

```bash
# Check git status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Check which files are tracked
git ls-files
```

---

## Troubleshooting

**If you get "git is not recognized":**
- Make sure Git is installed
- Close and reopen your terminal
- Try restarting your computer

**If push fails:**
- Make sure you're using a Personal Access Token (not password)
- Check that the repository URL is correct
- Verify you're in the correct folder

**If GitHub Pages isn't working:**
- Make sure your repository is Public
- Check that you selected the correct branch (main)
- Wait a few minutes for the site to build
- Check the Pages settings for any error messages
