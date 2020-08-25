import {groups} from '../utils/index'

export const getAllGruops = async () => {
    const result = await groups();
    return result;
};

export default getAllGruops;