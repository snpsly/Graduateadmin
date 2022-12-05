import React from "react";
import CleanTable from "../../components/table/cleantable";
import {
  selectclient,
  updateclean,
  deleteclean,
  addclient,
} from "../../api/manage";
const Client = () => {
  return (
    <div>
      <CleanTable
        selectfun={selectclient}
        updateclean={updateclean}
        deleteclean={deleteclean}
        addclean={addclient}
      ></CleanTable>
    </div>
  );
};
export default Client;
