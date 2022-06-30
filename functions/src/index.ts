import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// eslint-disable-next-line max-len
admin.initializeApp(functions.config().firebase); // for intial to use firebase
export const ChickenFarmChart = functions.https.onRequest(async (request, response) => {
    const db = admin.firestore(); // create instance for access firestore
    const dateNow = new Date();
    const dateNow2 = new Date(dateNow);
    dateNow2.setMinutes(dateNow.getMinutes() + 420);
    console.log("dateNow:" + dateNow + " / dateNow2 : " + dateNow2);

    let dataTest = request.body;

     if (dataTest.TagName == null)
     {
        dataTest = {
            DisplayName: "Tem.Sensor1",
            FarmCode: "66582",
            FarmName: "Chakkarat",
            FarmType: "Lay",
            TimeStamp: "2021-09-03T10:11:24.000Z",
            House: "House1",
            Parameter: "Climate.InsideTemperatureSensor1",
            TagMaster: "CF_Chakkarat_Lay66582House1",
            TagName: "InsideTemperatureSensor1",
            Value: 27.5,
            MasterTag: "N",
            GraphCategory: "Temperature",
            Unixtime: "1596225553070"
        };
        //response.status(200).send("TagName is Null" + request.body);
     }
     else
     {
        //response.status(200).send("TagName is not Null");
     }
    
    if (dataTest.TagName == "InsideTemperatureSensor1") {

        try {
            const TagRef = await db.collection("ChickenFarmChart").doc("CF_" + dataTest.FarmName + "_" + dataTest.FarmType + "_" + dataTest.House).collection(dataTest.TagName).doc(dataTest.TimeStamp);
            TagRef.get()
                .then(async doc => {
                        console.log("ChickenFarmChart  ==> will be add with id");
                        await TagRef
                            .set(dataTest)
                            .then(() => { // don't hae will be insert NEW collection , So return success function
                                console.log("ChickenFarmChart Insert Success" + dataTest.TimeStamp);
                                response.status(200).send(" ChickenFarmChart Insert Success " + dataTest.TimeStamp);
                                response.end();
                            }).catch(err15 => { // insert NEW collection , but have some error
                                console.log("ChickenFarmChart Insert ==>" + err15);
                                response.status(200).send("ChickenFarmChart Insert ==>" + err15);
                                response.end();
                            });
                })
                .catch(err6 => {
                    console.log("ChickenFarmChart Error getting document:" + dataTest.TagName + ":", err6);
                    response.status(500).send("Error ChickenFarmChart" + err6);
                    response.end();
                });
        }
        catch (errorOut) {
            console.log("Error getting ChickenFarmChart catch:", errorOut);
            response.status(500).send("Error ChickenFarmChart Catch:" + errorOut);
            response.end();
        }


    }

    if (dataTest.TagName == "InsideTemperatureSensor2") {

        try {
            const TagRef = await db.collection("ChickenFarmChart").doc("CF_" + dataTest.FarmName + "_" + dataTest.FarmType + "_" + dataTest.House).collection(dataTest.TagName).doc(dataTest.TimeStamp);
            TagRef.get()
                .then(async doc => {
                        console.log("ChickenFarmChart  ==> will be add with id");
                        await TagRef
                            .set(dataTest)
                            .then(() => { // don't hae will be insert NEW collection , So return success function
                                console.log("ChickenFarmChart Insert Success" + dataTest.TimeStamp);
                                response.status(200).send(" ChickenFarmChart Insert Success " + dataTest.TimeStamp);
                                response.end();
                            }).catch(err15 => { // insert NEW collection , but have some error
                                console.log("ChickenFarmChart Insert ==>" + err15);
                                response.status(200).send("ChickenFarmChart Insert ==>" + err15);
                                response.end();
                            });
                })
                .catch(err6 => {
                    console.log("ChickenFarmChart Error getting document:" + dataTest.TagName + ":", err6);
                    response.status(500).send("Error ChickenFarmChart" + err6);
                    response.end();
                });
        }
        catch (errorOut) {
            console.log("Error getting ChickenFarmChart catch:", errorOut);
            response.status(500).send("Error ChickenFarmChart Catch:" + errorOut);
            response.end();
        }


    }

    if (dataTest.TagName == "InsideTemperatureSensor3") {

        try {
            const TagRef = await db.collection("ChickenFarmChart").doc("CF_" + dataTest.FarmName + "_" + dataTest.FarmType + "_" + dataTest.House).collection(dataTest.TagName).doc(dataTest.TimeStamp);
            TagRef.get()
                .then(async doc => {
                        console.log("ChickenFarmChart  ==> will be add with id");
                        await TagRef
                            .set(dataTest)
                            .then(() => { // don't hae will be insert NEW collection , So return success function
                                console.log("ChickenFarmChart Insert Success" + dataTest.TimeStamp);
                                response.status(200).send(" ChickenFarmChart Insert Success " + dataTest.TimeStamp);
                                response.end();
                            }).catch(err15 => { // insert NEW collection , but have some error
                                console.log("ChickenFarmChart Insert ==>" + err15);
                                response.status(200).send("ChickenFarmChart Insert ==>" + err15);
                                response.end();
                            });
                })
                .catch(err6 => {
                    console.log("ChickenFarmChart Error getting document:" + dataTest.TagName + ":", err6);
                    response.status(500).send("Error ChickenFarmChart" + err6);
                    response.end();
                });
        }
        catch (errorOut) {
            console.log("Error getting ChickenFarmChart catch:", errorOut);
            response.status(500).send("Error ChickenFarmChart Catch:" + errorOut);
            response.end();
        }


    }

    if (dataTest.TagName == "InsideTemperatureSensor4") {

        try {
            const TagRef = await db.collection("ChickenFarmChart").doc("CF_" + dataTest.FarmName + "_" + dataTest.FarmType + "_" + dataTest.House).collection(dataTest.TagName).doc(dataTest.TimeStamp);
            TagRef.get()
                .then(async doc => {
                        console.log("ChickenFarmChart  ==> will be add with id");
                        await TagRef
                            .set(dataTest)
                            .then(() => { // don't hae will be insert NEW collection , So return success function
                                console.log("ChickenFarmChart Insert Success" + dataTest.TimeStamp);
                                response.status(200).send(" ChickenFarmChart Insert Success " + dataTest.TimeStamp);
                                response.end();
                            }).catch(err15 => { // insert NEW collection , but have some error
                                console.log("ChickenFarmChart Insert ==>" + err15);
                                response.status(200).send("ChickenFarmChart Insert ==>" + err15);
                                response.end();
                            });
                })
                .catch(err6 => {
                    console.log("ChickenFarmChart Error getting document:" + dataTest.TagName + ":", err6);
                    response.status(500).send("Error ChickenFarmChart" + err6);
                    response.end();
                });
        }
        catch (errorOut) {
            console.log("Error getting ChickenFarmChart catch:", errorOut);
            response.status(500).send("Error ChickenFarmChart Catch:" + errorOut);
            response.end();
        }


    }

    if (dataTest.TagName == "InsideTemperatureSensor5") {

        try {
            const TagRef = await db.collection("ChickenFarmChart").doc("CF_" + dataTest.FarmName + "_" + dataTest.FarmType + "_" + dataTest.House).collection(dataTest.TagName).doc(dataTest.TimeStamp);
            TagRef.get()
                .then(async doc => {
                        console.log("ChickenFarmChart  ==> will be add with id");
                        await TagRef
                            .set(dataTest)
                            .then(() => { // don't hae will be insert NEW collection , So return success function
                                console.log("ChickenFarmChart Insert Success" + dataTest.TimeStamp);
                                response.status(200).send(" ChickenFarmChart Insert Success " + dataTest.TimeStamp);
                                response.end();
                            }).catch(err15 => { // insert NEW collection , but have some error
                                console.log("ChickenFarmChart Insert ==>" + err15);
                                response.status(200).send("ChickenFarmChart Insert ==>" + err15);
                                response.end();
                            });
                })
                .catch(err6 => {
                    console.log("ChickenFarmChart Error getting document:" + dataTest.TagName + ":", err6);
                    response.status(500).send("Error ChickenFarmChart" + err6);
                    response.end();
                });
        }
        catch (errorOut) {
            console.log("Error getting ChickenFarmChart catch:", errorOut);
            response.status(500).send("Error ChickenFarmChart Catch:" + errorOut);
            response.end();
        }


    }

    
    
    response.send(200);

});
