install:
	npm install
gendiff:
	node bin/gendiff.js
lint:
	npx eslint .
test:
	NODE_OPTIONS='--experimental-vm-modules --no-warnings' npx jest
test-coverage: 
	NODE_OPTIONS='--experimental-vm-modules --no-warnings' npx jest --coverage