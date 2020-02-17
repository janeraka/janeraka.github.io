NPM := npm
VENDOR_DIR := assets/vendor/
SCSS_VENDOR_DIR := _sass/vendor/
JEKYLL := jekyll

install:
	$(NPM) install

include-npm-deps:
	mkdir -p $(VENDOR_DIR)
	mkdir -p $(SCSS_VENDOR_DIR)
	cp node_modules/jquery/dist/jquery.min.js $(VENDOR_DIR)
	cp node_modules/popper.js/dist/umd/popper.min.js $(VENDOR_DIR)
	cp node_modules/bootstrap/dist/js/bootstrap.min.js $(VENDOR_DIR)
	cp node_modules/wowjs/dist/wow.min.js $(VENDOR_DIR)
	cp node_modules/lite-youtube-embed/src/lite-yt-embed.css $(VENDOR_DIR)
	cp node_modules/lite-youtube-embed/src/lite-yt-embed.js $(VENDOR_DIR)
	cp -R node_modules/bootstrap/scss $(SCSS_VENDOR_DIR)bootstrap
	cp node_modules/tile/tile.scss $(SCSS_VENDOR_DIR)
	cp -R node_modules/animatewithsass $(SCSS_VENDOR_DIR)animatewithsass


build: install include-npm-deps
	$(JEKYLL) build

serve: install include-npm-deps
	JEKYLL_ENV=production $(JEKYLL) serve --livereload

generate-githubpages:
	rm -fr docs && JEKYLL_ENV=production $(JEKYLL) build --baseurl https://marcanuy.github.io/jekyll-bootstrap4/ -d docs/ && touch docs/.nojekyll
