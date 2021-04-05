# Git Cheat Sheet

**Configure Git username and email globally.** These details will be associated with your commits. *Use without* `--global` *flag to set Git username and email for the current repository.*

```
$ git config --global user.name "JohnDoe"
$ git config --global user.email "johndoe@gmail.com"
```

**Initialize Git repository with an existing project.** Inside project folder:

```
$ git init
```

## **ALWAYS CHECK STATUS!!!**

Very useful command. Use whenever you are using git. It will show the current status of the repo and git workflow and possible actions.

```
$ git status
```

**Help.** Get help with git commands

```
$ git help <git command>
```

## **Cloning an existing repository**

```
$ git clone <REPO_URL>
```

**Configuring remote URL for a repo.** (Useful when setting up a fork)

```
$ git remote -v //list down all remotes
$ git remote add origin <REPO_URL> //add origin
$ git remote rename <old-name> <new-name> //rename a remote
```

**Add the original repo URL as Upstream.** (can use any other name as well)

```
$ git remote add upstream https://github.com/ORIGINAL_REPOSITORY.git
$ git remote show upstream //details
```

**Syncing a fork with upstream.** (syncing master branch)

```
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
```

## **Branching**

```
$ git branch //list branches
$ git branch -a //list all remote branches
$ git branch <new_branch_name> //create new branch
$ git branch -d <branch> //delete branch
$ git branch -D <branch> //force delete branch
$ git branch -m <rename_branch> //rename$ git checkout <branch> //change current branch
$ git checkout -b <new_branch_name> //create and change branch
```

**Setup local branch to track remote branch**

```
$ git branch -u origin/<remote_branch> <local_branch>
```

**Delete remote branch**

```
$ git push origin --delete remote-branch-name
```

## **Git basic workflow**

```
$ git add . //stage all files with changes after working
OR
$ git add <SPECIFIC_FILE/DIRECTORY>$ git commit //opens interactive shell for type commit message
OR
$ git commit -m "YOUR COMMIT MESSAGE"$ git pull //pull from remote branch tracked by current local branch
OR
$ git pull origin <BRANCH> //BRANCH - master, dev, feature-x...$ git push //if already tracking a remote branch
```

**Push to a remote branch.** (create a remote branch if not existing)

```
$ git push -u origin <BRANCH_NAME> 
```

**Amend a commit.** Add more changes to the last commit. Change commit message.

```
$ git commit --amend 
$ git commit --amend -m “message”
```

**Check changes since the last commit.**

```
$ git diff
$ git diff --staged //difference from the staged(git add) files
```

For more complex usage like comparing 2 files, comparing 2 commits, comparing 2 branches check out https://www.atlassian.com/git/tutorials/saving-changes/git-diff

**Git log. (**Check commit history)

```
$ git log
$ git log -n <limit> //limit
$ git log --oneline //Condense
$ git log --stat //stats
$ git log --author="<pattern>" //commits from specific author
$ git log <file> //commits including a file$ git log --graph --decorate --oneline
```

**Blame** (check all detailed changes in a file)

```
$ git blame <FILE>
$ git blame <FILE> --date short
```

**Remove**

```
$ git rm <FILE> //removes file
$ git rm '*.txt' //remove all files with extension .txt
```

**Make a file untracked.** Remove file from git index. But keep the file:

```
$ git rm — cached <FILE> //make the file untracked
```

Or you can use the `.gitignore` file.

**Force pull.** (Get the version in the remote)

```
$ git fetch --all
$ git reset --hard origin/<branch_name>
$ git checkout -- .
```

**Force push.** (Forcefully overwrite remote branch with local commit history)

```
$ git push origin <your_branch_name> --force
```

## **Undo**

**Resetting the Stage.** (Unstage)

```
$ git reset <FILE>
```

**Remove all changes since last commit to the file.**

```
$ git checkout -- <FILE>
$ git reset HEAD <FILE>
```

**Move to commit before HEAD, commit files added to stage.**

```
$ git reset --soft HEAD^
```

**Remove/undo last commit and changes.**

```
$ git reset --hard HEAD^
```

**Reset to last commit.** (**Useful to undo pull merge conflicts to the last commit)**

```
$ git reset --hard HEAD
```

## Stashing

Put our work to a stack until we pull new changes from remote.

```
$ git stash //stash unstaged changes  
$ git stash save "add style to our site" //stash with a message//pull from remote and merge$ git stash show //show stash 
$ git stash show -p //show the diff of stash
$ git stash list$ git stash pop 
OR 
$ git stash pop stash@{0} //stash@{0} - stash number$ git stash apply
```

**Create a branch from the stash**

```
$ git stash branch <BRANCH_NAME> stash@{1} //stash@{1} - stash no.
```

**Clean stash**

```
$ git stash drop stash@{1}
$ git stash clear //clear all stashes
```

## Tagging

Useful for tracking releases/versions.

```
$ git tag //list tags
$ git checkout <TAG> //checkout the code at tag(version)
$ git tag -a v0.0.3 -m "version 0.0.3" //create a new tag v0.0.3
$ git push --tags
```

Checkout https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-tag for advanced usage.

## **Rebase (fetch and rebase)**

Rebasing is the process of moving or combining a sequence of commits to a new base commit. Also known as rewriting git history.

```
$ git fetch
$ git rebase //adds local commits on top of origin commits, no merge commit
$ git rebase -i //rebase interactive session
```

**When a conflict occurs**

```
$ git rebase --continue //fix the conflict and continue
$ git rebase — skip //skip conflict
$ git rebase --abort //abort rebase
```

**Local rebasing**

```
$ git checkout <some_branch>
$ git rebase master //rebase master branch to "some_branch"
$ git checkout master
$ git merge <some_branch>
```

Actually rebasing is kind of an advanced feature of Git. Please follow the documentation for more information. https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase

## **Remove a Merge Commit**

If you want to remove a merge commit so that it is like it never happened, the command is simply as follows

```
$ git rebase --onto <SHA of commit 1> <SHA of commit 2> <BRANCH>
```

## .gitignore - remove cached files

When the files are already identified by git .gitignore cannot remove them. This happens mostly when you are adding a new entry to .gitignore for files which are already identified by git.

```
$ git rm -r --cached . && git add . && git commit -m "fixing .gitignore"// You can run above commands one by one with more control/clarity
$ git rm -r --cached .
$ git add . 
$ git commit -m "fixing .gitignore"
```

Reference : https://medium.com/@shanikae/git-beginners-cheatsheet-6abbc15f108b