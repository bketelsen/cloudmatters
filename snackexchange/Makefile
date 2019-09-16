build:
	mkdir -p functions
	cd funcsource && go get
	go build -o functions/hello-lambda funcsource/main.go
	yarn export