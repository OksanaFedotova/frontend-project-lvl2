install:
	npm install
gendiff:
	node bin/gendiff.js -h
make lint:
	npx eslint .
make test:
	NODE_OPTIONS='--experimental-vm-modules --no-warnings' npx jest