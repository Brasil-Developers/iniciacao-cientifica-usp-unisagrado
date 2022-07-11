import api from '../../service/api';

class Tasks {
    async getAll({ page, size, order }) {
        const url = `/tasks?page=${page}&size=${size}${order != '' ? `&field=${order}` : ''}`;
        return api.get(url);
    }
    get(values) {
        const url = `/tasks/${values.id}`;
        return api.get(url);
    }
}

export default new Tasks();
