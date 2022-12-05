import request from "../utils/request";
export const selectclean = (page: number, username?: string) => {
  return request({
    url: "manage/selectclean",
    method: "post",
    data: {
      username,
      page,
    },
  });
};
type user = {
  username: string;
  password: string;
  name?: string;
  id?: number;
};
export const updateclean = ({ username, password, name, id }: user) => {
  return request({
    url: "manage/updateclean",
    method: "post",
    data: {
      username,
      password,
      name,
      id,
    },
  });
};
export const deleteclean = (id: number) => {
  return request({
    url: "manage/deleteclean",
    method: "post",
    data: {
      id,
    },
  });
};

export const addclean = ({ username, password, name }: user) => {
  return request({
    url: "manage/addclean",
    method: "post",
    data: {
      username,
      password,
      name,
    },
  });
};
export const selectclient = (page: number, username?: string) => {
  return request({
    url: "manage/selectclient",
    method: "post",
    data: {
      username,
      page,
    },
  });
};
export const addclient = ({ username, password, name }: user) => {
  return request({
    url: "manage/addclient",
    method: "post",
    data: {
      username,
      password,
      name,
    },
  });
};
export const loginmanage = ({ username, password, name }: user) => {
  return request({
    url: "manage/loginmanage",
    method: "post",
    data: {
      username,
      password,
    },
  });
};
export const selectmessage = (page: number, username?: string) => {
  return request({
    url: "manage/selectmessage",
    method: "post",
    data: {
      username,
      page,
    },
  });
};

export const updatemessage = ({ username, password, name, id }: user) => {
  return request({
    url: "manage/updatemessage",
    method: "post",
    data: {
      username,
      password,
      name,
      id,
    },
  });
};
export const deletemessage = (id: number) => {
  return request({
    url: "manage/deletemessage",
    method: "post",
    data: {
      id,
    },
  });
};

export const addmessage = ({ username, password, name }: user) => {
  return request({
    url: "manage/addmessage",
    method: "post",
    data: {
      username,
      password,
      name,
    },
  });
};
export const selectshopping = (page: number, username?: string) => {
  return request({
    url: "manage/selectshopping",
    method: "post",
    data: {
      page,
    },
  });
};
export const updateshopping = ({
  id,
  shop_title,
  shop_num,
  shop_price,
  shop_sn,
  shop_date,
}: any) => {
  return request({
    url: "manage/updateshopping",
    method: "post",
    data: {
      id,
      shop_title,
      shop_num,
      shop_price,
      shop_sn,
      shop_date,
    },
  });
};
export const deleteshopping = (id: number) => {
  return request({
    url: "manage/deleteshopping",
    method: "post",
    data: {
      id,
    },
  });
};

export const addshopping = ({
  shop_title,
  shop_num,
  shop_price,
  shop_sn,
  shop_date,
}: any) => {
  return request({
    url: "manage/addshopping",
    method: "post",
    data: {
      shop_title,
      shop_num,
      shop_price,
      shop_sn,
      shop_date,
    },
  });
};
//order
export const selectorder = (page: number, username?: string) => {
  return request({
    url: "manage/selectorder",
    method: "post",
    data: {
      page,
    },
  });
};
export const updateorder = ({
  id,
  shop_title,
  shop_price,
  user_id,
  clean_id,
  date,
  order_state,
  user_address,
  date_time,
  date_pause,
  shop_num,
  user_phone,
  user_name,
  clean_name,
}: any) => {
  return request({
    url: "manage/updateorder",
    method: "post",
    data: {
      id,
      shop_title,
      shop_price,
      user_id,
      clean_id,
      date,
      order_state,
      user_address,
      date_time,
      date_pause,
      shop_num,
      user_phone,
      user_name,
      clean_name,
    },
  });
};
export const deleteorder = (id: number) => {
  return request({
    url: "manage/deleteorder",
    method: "post",
    data: {
      id,
    },
  });
};

export const addorder = ({
  shop_title,
  shop_price,
  user_id,
  clean_id,
  date,
  order_state,
  user_address,
  date_time,
  date_pause,
  shop_num,
  user_phone,
  user_name,
  clean_name,
}: any) => {
  return request({
    url: "manage/addorder",
    method: "post",
    data: {
      shop_title,
      shop_price,
      user_id,
      clean_id,
      date,
      order_state,
      user_address,
      date_time,
      date_pause,
      shop_num,
      user_phone,
      user_name,
      clean_name,
    },
  });
};
