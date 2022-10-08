import request from '~/utils/httpRequest';
const search = async (data) => {
    try {
        let res = await request.get('users/search', {
            params: {
                q: data.q,
                type: data.type,
            },
        });
        return res.data;
    } catch (err) {
        console.log('Lỗi', err);
    }
};

export { search };
