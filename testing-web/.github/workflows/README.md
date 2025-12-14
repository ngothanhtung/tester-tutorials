# GitHub Actions CI/CD for Firebase Hosting

This workflow automatically builds and deploys your React app to Firebase Hosting.

## Setup Instructions

### 1. Get Firebase Token

Run this command in your terminal:

```bash
firebase login:ci
```

This will generate a token. Copy it.

### 2. Add Token to GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `FIREBASE_TOKEN`
5. Value: Paste the token from step 1
6. Click **Add secret**

### 3. Workflow Triggers

The workflow will run:

- **On Push**: To `main` or `master` branch (builds, tests, and deploys)
- **On Pull Request**: To `main` or `master` branch (builds and tests only, no deploy)

### 4. What the Workflow Does

1. ✅ Checks out your code
2. ✅ Sets up Node.js 20 with Yarn caching
3. ✅ Installs dependencies
4. ✅ Runs tests
5. ✅ Builds the project
6. ✅ Deploys to Firebase Hosting (only on push to main/master)

### 5. View Workflow Results

Go to your repository → **Actions** tab to see workflow runs and their status.

## Manual Deployment

You can still deploy manually using:

```bash
yarn deploy
```

## Troubleshooting

- **Deployment fails**: Check if `FIREBASE_TOKEN` secret is set correctly
- **Tests fail**: Fix test errors or adjust test command in workflow
- **Build fails**: Check build errors in the Actions log
