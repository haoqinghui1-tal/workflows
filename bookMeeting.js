import axios from 'axios';
import {Room} from './config.js'
const curRoom  = Room[806]
const meetingDate={
  startDate: getCurrentDate(),
  endDate: getCurrentDate(),
  startTime: "10:00:00",
  endTime: "11:00:00",
  startTimeCycle: "10:00",
  endTimeCycle: "11:00",
}

const data = {
    meeting_type_service: [],
    meeting_type_id: "",
    is_paperless: 0,
    id: null,
    title: "技术分享会",
    start_date: meetingDate.startDate,
    end_date: meetingDate.endDate,
    start_time:meetingDate.startDate+' '+meetingDate.startTime,
    end_time: meetingDate.endDate+' '+meetingDate.endTime,
    all_day: false,
    timezone: "UTC+08:00",
    iscycle: 0,
    cycle_cfg: {
      cycle_type: "d",
      start_date: meetingDate.startDate,
      end_date: meetingDate.endDate,
      start_time:meetingDate.startTimeCycle,
      end_time: meetingDate.endTimeCycle,
      interval: 1,
      dayPeriod: 1,
      weekPeriod: 1,
      monthPeriod: 1,
      week_value: [],
      month_value: [],
      cycle_value: [],
      dayMode: 0
    },
    meetingroom: [
      curRoom.meetingroomId
    ],
    meeting_service: {
      "103e426a118b11eeb4ec0242ac12000f": []
    },
    location_address: "",
    location_latitude_longitude: "",
    remind_times: "5",
    book_person_id: "300306@1",
    book_person_name: "郝庆会",
    book_person_job_num: "300306",
    book_person_department: "Team 1-在线学习事业部-互联网研发部-前端研发部-学习组",
    book_person_state: null,
    book_source: 1,
    view_permisson: 1,
    remark: "",
    contacts_name: "",
    contacts_phone: "",
  services: [],
    attendees: [
      {
        id: "300306@1",
        name: "郝庆会",
        job_num: "300306",
        avatar: {
          path: null,
          name: ""
        },
        department: [
          "Team 1-在线学习事业部-互联网研发部-前端研发部-学习组",
          "Team 1-在线学习事业部-互联网研发部-前端研发部",
          "Team 1-在线学习事业部-互联网研发部",
          "好未来教育"
        ],
        is_busy: 0,
        type: "user",
        item_show: true,
        add: 0,
        need_desk_card: 0,
        paperless: ""
      }
    ],
    attendees_department: [
      [
        "Team 1-在线学习事业部-互联网研发部-前端研发部-学习组",
        "Team 1-在线学习事业部-互联网研发部-前端研发部",
        "Team 1-在线学习事业部-互联网研发部",
        "好未来教育"
      ]
    ],
    attachment: "",
    host_room:curRoom.meetingroomGuid,
    dcd_li: [],
    online_type: 0,
    online_meeting_content: "",
    online_password: 0,
    attachment_data: [],
    topic: [],
    agenda: [],
    meetingroom_guid: [
      curRoom.meetingroomGuid
    ],
    book_person: {
      id: "300306@1",
      name: "郝庆会",
      job_num: "300306",
      department: "Team 1-在线学习事业部-互联网研发部-前端研发部-学习组"
    }
  }
console.log('data',data);
// 创建实例时配置默认值
const http = axios.create({
    Headers: {
        'Cookie': 'sessionid=2lh429ujhi3wmflopi1atla8qx6vptjc; TokenKey=succeed'
    }
  });
async function bookMeetingRoom() {
  try {
    const response = await http.post('https://huiyi.tal.com/prod-api/meeting/add?sf_request_type=ajax', data);
    console.log('success', response.data);
  } catch (error) {
    console.error('fail', error);
  }
}
function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份是从0开始的
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
bookMeetingRoom();
