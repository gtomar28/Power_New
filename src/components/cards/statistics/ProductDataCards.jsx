import rockyBook from 'assets/images/rockyBook.svg';
import { Card, CardContent, Typography, Grid, Box} from '@mui/material';
export default function ProductDataCards() {

    return (
        <Grid container rowGap={5} spacing={3} sx={{ backgroundColor: '#fff', p: 3, borderRadius: '12px' }}>
            <Grid item xs={12} md={4} sx={{
                position: "relative",
                display: "inline-block",
            }}>
                {/* Top Card */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-10px",
                        left: "10px",
                        width: '70%',
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                        zIndex: 1,
                        padding: "12px",
                        display: 'flex'
                    }}
                > <img src={rockyBook} alt="" />
                    <Typography
                        variant="h5"
                        alignSelf='center'
                        ml={1}
                    >
                        Lotus.com
                    </Typography>
                </Box>

                {/* Bottom Card */}
                <Card
                    sx={{
                        pt: '20px',
                        height: '100%',
                        borderRadius: "10px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        alignContent: 'center'
                    }}
                >
                    <CardContent>
                        <Typography variant="body1" sx={{ fontSize: "14px", marginBottom: "6px" }}>
                            Total PayIn: <strong>INR 74,00,000</strong>
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "14px", marginBottom: "6px" }}>
                            Total Payout: <strong>INR 53,00,000</strong>
                        </Typography>
                    </CardContent>

                    <Grid container>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                }}
                            >
                                <Typography variant="body2" >
                                    Total Admin:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">6</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                    textWrap: 'nowrap'
                                }}
                            >
                                <Typography variant="body2">
                                    Total Sub Admin:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">60</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                }}
                            >
                                <Typography variant="body2">
                                    Total Peer:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">400</Typography>
                            </Box>
                        </Grid>
                    </Grid>


                </Card>


            </Grid>
            <Grid item xs={12} md={4} sx={{
                position: "relative",
                display: "inline-block",
            }}>
                {/* Top Card */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-10px",
                        left: "10px",
                        width: '70%',
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                        zIndex: 1,
                        padding: "12px",
                        display: 'flex'
                    }}
                > <img src={rockyBook} alt="" />
                    <Typography
                        variant="h5"
                        alignSelf='center'
                        ml={1}
                    >
                        Lotus.com
                    </Typography>
                </Box>

                {/* Bottom Card */}
                <Card
                    sx={{
                        pt: '20px',
                        height: '100%',
                        borderRadius: "10px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        alignContent: 'center'
                    }}
                >
                    <CardContent>
                        <Typography variant="body1" sx={{ fontSize: "14px", marginBottom: "6px" }}>
                            Total PayIn: <strong>INR 74,00,000</strong>
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "14px", marginBottom: "6px" }}>
                            Total Payout: <strong>INR 53,00,000</strong>
                        </Typography>
                    </CardContent>

                    <Grid container>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                }}
                            >
                                <Typography variant="body2" >
                                    Total Admin:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">6</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                    textWrap: 'nowrap'
                                }}
                            >
                                <Typography variant="body2">
                                    Total Sub Admin:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">60</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                }}
                            >
                                <Typography variant="body2">
                                    Total Peer:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">400</Typography>
                            </Box>
                        </Grid>
                    </Grid>


                </Card>


            </Grid>
            <Grid item xs={12} md={4} sx={{
                position: "relative",
                display: "inline-block",
            }}>
                {/* Top Card */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-10px",
                        left: "10px",
                        width: '70%',
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                        zIndex: 1,
                        padding: "12px",
                        display: 'flex'
                    }}
                > <img src={rockyBook} alt="" />
                    <Typography
                        variant="h5"
                        alignSelf='center'
                        ml={1}
                    >
                        Lotus.com
                    </Typography>
                </Box>

                {/* Bottom Card */}
                <Card
                    sx={{
                        pt: '20px',
                        height: '100%',
                        borderRadius: "10px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        alignContent: 'center'
                    }}
                >
                    <CardContent>
                        <Typography variant="body1" sx={{ fontSize: "14px", marginBottom: "6px" }}>
                            Total PayIn: <strong>INR 74,00,000</strong>
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "14px", marginBottom: "6px" }}>
                            Total Payout: <strong>INR 53,00,000</strong>
                        </Typography>
                    </CardContent>

                    <Grid container>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                }}
                            >
                                <Typography variant="body2" >
                                    Total Admin:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">6</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                    textWrap: 'nowrap'
                                }}
                            >
                                <Typography variant="body2">
                                    Total Sub Admin:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">60</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                }}
                            >
                                <Typography variant="body2">
                                    Total Peer:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">400</Typography>
                            </Box>
                        </Grid>
                    </Grid>


                </Card>


            </Grid>
            <Grid item xs={12} md={4} sx={{
                position: "relative",
                display: "inline-block",
            }}>
                {/* Top Card */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-10px",
                        left: "10px",
                        width: '70%',
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                        zIndex: 1,
                        padding: "12px",
                        display: 'flex'
                    }}
                > <img src={rockyBook} alt="" />
                    <Typography
                        variant="h5"
                        alignSelf='center'
                        ml={1}
                    >
                        Lotus.com
                    </Typography>
                </Box>

                {/* Bottom Card */}
                <Card
                    sx={{
                        pt: '20px',
                        height: '100%',
                        borderRadius: "10px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        alignContent: 'center'
                    }}
                >
                    <CardContent>
                        <Typography variant="body1" sx={{ fontSize: "14px", marginBottom: "6px" }}>
                            Total PayIn: <strong>INR 74,00,000</strong>
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "14px", marginBottom: "6px" }}>
                            Total Payout: <strong>INR 53,00,000</strong>
                        </Typography>
                    </CardContent>

                    <Grid container>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                }}
                            >
                                <Typography variant="body2" >
                                    Total Admin:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">6</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                    textWrap: 'nowrap'
                                }}
                            >
                                <Typography variant="body2">
                                    Total Sub Admin:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">60</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                }}
                            >
                                <Typography variant="body2">
                                    Total Peer:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">400</Typography>
                            </Box>
                        </Grid>
                    </Grid>


                </Card>


            </Grid>
            <Grid item xs={12} md={4} sx={{
                position: "relative",
                display: "inline-block",
            }}>
                {/* Top Card */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-10px",
                        left: "10px",
                        width: '70%',
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                        zIndex: 1,
                        padding: "12px",
                        display: 'flex'
                    }}
                > <img src={rockyBook} alt="" />
                    <Typography
                        variant="h5"
                        alignSelf='center'
                        ml={1}
                    >
                        Lotus.com
                    </Typography>
                </Box>

                {/* Bottom Card */}
                <Card
                    sx={{
                        pt: '20px',
                        height: '100%',
                        borderRadius: "10px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        alignContent: 'center'
                    }}
                >
                    <CardContent>
                        <Typography variant="body1" sx={{ fontSize: "14px", marginBottom: "6px" }}>
                            Total PayIn: <strong>INR 74,00,000</strong>
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "14px", marginBottom: "6px" }}>
                            Total Payout: <strong>INR 53,00,000</strong>
                        </Typography>
                    </CardContent>

                    <Grid container>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                }}
                            >
                                <Typography variant="body2" >
                                    Total Admin:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">6</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                    textWrap: 'nowrap'
                                }}
                            >
                                <Typography variant="body2">
                                    Total Sub Admin:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">60</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    backgroundColor: "#F2F6FC",
                                    padding: 0.9,
                                    margin: 0.5,
                                    borderRadius: 1,
                                    textAlign: "start",
                                }}
                            >
                                <Typography variant="body2">
                                    Total Peer:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">400</Typography>
                            </Box>
                        </Grid>
                    </Grid>


                </Card>


            </Grid>
        </Grid>
    );
}
