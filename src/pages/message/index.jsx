import React from "react";
import CleanTable from "../../components/table/cleantable";
import {
  selectmessage,
  updatemessage,
  deletemessage,
  addmessage,
} from "../../api/manage";
const Client = () => {
  return (
    <div>
      <CleanTable
        selectfun={selectmessage}
        updateclean={updatemessage}
        deleteclean={deletemessage}
        addclean={addmessage}
      ></CleanTable>
    </div>
  );
};
export default Client;
