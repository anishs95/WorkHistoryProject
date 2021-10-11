import http from "../http-common";

class WorkHistoryServices {
  getAllWorkHistory() {
    return http.get("/work/workhistory");
  }

  getWorkHistoryByEmpId(id) {
    return http.get(`/work/workhistory/${id}`);
  }

  createWork(data) {
    return http.post("/work/workhistory", data);
  }

  updateWork(data) {
    return http.put(`/work/workhistory`, data);
  }

  deleteWork(id) {
    return http.delete(`/work/workhistory/${id}`);
  }
}

export default new WorkHistoryServices();
