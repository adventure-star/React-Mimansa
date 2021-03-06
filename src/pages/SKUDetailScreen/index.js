import React, { useState, useEffect } from 'react'
import WithHeaderLayout from '../../layouts/WithHeaderLayout';
import { Typography, Card, CardHeader, CardContent } from '@material-ui/core';

import logo from '../../images/logo.png';
import { useHistory } from 'react-router-dom';


const SKUDetailScreen = () => {

    let history = useHistory();

    const [skuid, setSKUId] = useState("");
    const [userid, setUserId] = useState("");
    const [lpnid, setLPNId] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");

    const [desc, setDesc] = useState("");
    const [sku, setSKU] = useState("");
    const [dspsku, setDspSku] = useState("");

    useEffect(() => {
        var scanInfo = JSON.parse(sessionStorage.getItem("scanInfo"));
        if (scanInfo === null || scanInfo.skuid === undefined) {
            history.push("/iddetail");
        } else {
            setSKUId(scanInfo.skuid);
            setLPNId(scanInfo.lpnid);
            setUserId(scanInfo.userid);
            setLocation(scanInfo.location);
            setImage(scanInfo.image);

            setDesc(scanInfo.desc);
            setSKU(scanInfo.dsp_sku);
        }

    }, []);

    return (
        <WithHeaderLayout title="ID Screen">
            <div className="p-8">

                <div className="w-full text-right">
                    {userid !== "" && location !== "" &&
                        <span>{userid} @ {location}</span>
                    }
                </div>
                <div className="mx-auto" style={{ maxWidth: "600px" }}>
                    <div className="w-full text-center">
                        <Typography variant="h3" color="primary">
                            Pack LPN
                </Typography>
                    </div>
                    <Card className="p-6 mt-12">
                        <CardHeader
                            title="SKU Detail Screen"
                            titleTypographyProps={{ variant: 'h4' }}
                            style={{ textAlign: "center" }}
                        />
                        <CardContent className="mx-3">
                            <div className="w-full text-center py-2">
                                <Typography style={{ paddingRight: "20px" }}>
                                    LPN ID: {lpnid}
                                </Typography>
                            </div>
                            <div className="w-full text-center py-2">
                                <Typography style={{ paddingRight: "20px" }}>
                                    SKU: {sku}
                                </Typography>
                            </div>
                            <div className="w-full text-center py-2">
                                <Typography style={{ paddingRight: "20px" }}>
                                    SKU DESC: {desc}
                                </Typography>
                            </div>
                            <div className="flex items-center mt-10">
                                {image !== "" &&
                                    <img className="w-32 h-32 mx-auto" src={image} alt="demo" />
                                }
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </WithHeaderLayout>
    )
}

export default SKUDetailScreen;