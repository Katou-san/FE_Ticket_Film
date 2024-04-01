import React, { useEffect, useState } from "react";
import "./list_ticket.css";
import TikectItem from "./TikectItem";
import { CloseIcon, LoadingIcon } from "../../icons/Icon";
import useAxios from "../../../Hook/useAxios";
import { Get_Ticket } from "../../../service/Ticket_Service";
import { Date_Handle } from "../../../Util";

export default function ListTicket({ Ticket_Form, dispatch_Form }) {
  const [state, dispacth] = useAxios();
  const [get_All_timeCreate, Set_get_All_timeCreate] = useState([]);
  const [List_ticket, Set_List_ticket] = useState([]);
  useEffect(() => {
    dispacth({ type: "REQUEST" });
    Get_Ticket().then((res) => {
      if (res.status === 200) {
        Set_List_ticket(res.data);
        let temp = [];
        res.data.map((ticket) => temp.push(ticket.creation_time));
        Set_get_All_timeCreate(
          [...new Set(temp)]
            .sort((a, b) => (a.creation_time > b.creation_time ? -1 : 0))
            .reverse()
        );
      }
      dispacth({ type: "COMPLETE" });
    });
  }, [Ticket_Form]);

  return (
    <div
      className={`Frame_List_Ticket ${Ticket_Form ? "hident_Form_Ticket" : ""}`}
    >
      <div
        className="Close_Icon"
        onClick={() => {
          dispatch_Form({
            type: "CHANGE",
            payload: { Ticket_Form_Hidden: true },
          });
        }}
      >
        <CloseIcon w={38} />
      </div>
      <div className="List_Item_Ticket">
        {get_All_timeCreate.map((timecreate, i) => {
          const time = Date_Handle(timecreate);
          const Current_time = Date_Handle(new Date());
          return (
            <div className="listItem_Time" key={i}>
              <div
                className={`Pay_Day ${
                  time.day >= Current_time.day ? "green" : "red"
                }`}
              >
                Ngày mua:
                {" " +
                  time.day +
                  "-" +
                  time.month +
                  "-" +
                  time.year +
                  " " +
                  time.hour +
                  ":" +
                  time.minute}
              </div>
              {List_ticket.map((ticket, i) => {
                if (timecreate === ticket.creation_time)
                  return <TikectItem key={i} ticket={ticket} />;
              })}
            </div>
          );
        })}

        {/* <LoadingIcon w={100} /> */}
      </div>
    </div>
  );
}
