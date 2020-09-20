
Ensure that you have Docker installed and running.

Pull the upstream Node container:
```
docker pull node
```

Run the container and mount the web directory into it:
```
docker run --rm -it -v ${PWD}/web/:/srv/:rw node bash
```

Switch to the directory where the files are mounted:
```
cd /srv
```

Install the needed packages:
```
npm install
```

Build the web:
```
npm run build
```

Static content is stored in `site/.vuepress/dist/`.
