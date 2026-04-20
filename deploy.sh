#!/data/data/com.termux/files/usr/bin/bash

echo "🚀 Deploying..."

source $HOME/.bashrc

git add .
git commit -m "auto deploy $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes"
git push

echo "🌐 Live:"
echo "https://$GITHUB_USER.github.io/$REPO_NAME/"
