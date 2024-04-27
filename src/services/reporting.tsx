import http from './http';
import {
    ReportingIndexPost,
    ReportingIndexGet
} from '../interface';

const endpoint = '/reporting';

export const ReportingService = async (payload: ReportingIndexPost) => {
    var response = await http.Post(endpoint + '/index.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: ReportingIndexGet[] = await response.json();
        return [data[0]?.love_doctor, data[1]?.overview, data[2]?.analytics];
    } else {
        return null;
    }
}
