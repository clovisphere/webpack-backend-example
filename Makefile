app=bundled-app.js

build:
	npm run build

clean:
	rm -Rf ./build/

run: clean build
	node ./build/$(app)

test:
	npm test
