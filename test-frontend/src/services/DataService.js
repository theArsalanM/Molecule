import http from "../http-common";

class DataService {
  getAll(limit, offset) {
    return http.get("/molecule/?limit="+limit+"&offset="+offset);
  }

  get(id) {
    return http.get(`/molecule/${id}/`);
  }

  get_activity(id, limit, offset) {
    return http.get(`/molecule/${id}/activity/?limit=`+limit+'&offset='+offset);
  }

}

export default new DataService();
