import React from "react";
import CleanTable from "./table/cleantable";
import {
  selectorder,
  updateorder,
  deleteorder,
  addorder,
} from "../../api/manage";
const Order = () => {
  return (
    <div>
      <CleanTable
        selectfun={selectorder}
        updateclean={updateorder}
        deleteclean={deleteorder}
        addclean={addorder}
      ></CleanTable>
    </div>
  );
};

export default Order;
