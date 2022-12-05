import React, { useEffect, useState } from "react";
import CleanTable from "../../components/table/cleantable";
import {
  selectclean,
  updateclean,
  deleteclean,
  addclean,
} from "../../api/manage";
const Cleaner = () => {
  return (
    <div>
      <CleanTable
        selectfun={selectclean}
        updateclean={updateclean}
        deleteclean={deleteclean}
        addclean={addclean}
      ></CleanTable>
    </div>
  );
};
export default Cleaner;
