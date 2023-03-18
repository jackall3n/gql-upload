// @ts-check

import TestDirector from "test-director";

import test_GraphQLUpload from "./GraphQLUpload.spec";
import test_graphqlUploadExpress from "./middleware/express.spec";
import test_graphqlUploadKoa from "./middleware/koa.spec";
import test_ignoreStream from "./utils/ignoreStream.spec";
import test_processRequest from "./utils/processRequest.spec";
import test_Upload from "./Upload.spec";

const tests = new TestDirector();

test_ignoreStream(tests);
test_GraphQLUpload(tests);
test_graphqlUploadExpress(tests);
test_graphqlUploadKoa(tests);
test_processRequest(tests);
test_Upload(tests);

tests.run();
