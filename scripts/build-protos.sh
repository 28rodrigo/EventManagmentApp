# --unsafe-perm needed in docker

#npm install -g --unsafe-perm grpc-tools@1.10.0
#npm install grpc_tools_node_protoc_ts@5.0.0 --save-dev

mkdir my_generated_code

yarn run grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:./my_generated_code \
--js_out=import_style=commonjs:./my_generated_code \
--grpc_out=grpc_js:./my_generated_code \
-I ./proto \
./proto/eventApp.proto