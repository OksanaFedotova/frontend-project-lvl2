install:
	npm install
gendiff:
	node bin/gendiff.js -h
lint:
	npx eslint .
test:
	NODE_OPTIONS='--experimental-vm-modules --no-warnings' npx jest