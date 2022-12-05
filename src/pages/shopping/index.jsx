import React from "react";
import CleanTable from "./table/cleantable";
import {
  selectshopping,
  updateshopping,
  deleteshopping,
  addshopping,
} from "../../api/manage";
const Shopping = () => {
  return (
    <div>
      <CleanTable
        selectfun={selectshopping}
        updateclean={updateshopping}
        deleteclean={deleteshopping}
        addclean={addshopping}
      ></CleanTable>
    </div>
  );
};

export default Shopping;
