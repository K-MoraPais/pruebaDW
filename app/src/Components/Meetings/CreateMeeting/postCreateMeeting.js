import axios from "axios";

const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InllU0F1cjJQUVAycWZkajd2cThyLVEi
LCJleHAiOjE2MzIxOTE3NTgsImlhdCI6MTYzMTU4Njk1N30.prwz9YMvNfI5OqjzsuI-Bmh06
m2GZNF3a67JFbp59VU`;

function postCreateMeeting() {
  axios({
    method: "post",
    url: "https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate",
    data: {
      type: 2,
      topic: "prueba",
      start_time: "2021-09-16T14:12",
      duration: 90,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default postCreateMeeting;
