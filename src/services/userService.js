import request from '~/utils/httpRequest';
const getSuggested = async (data) => {
    try {
        let res = await request.get('users/suggested', {
            params: {
                page: data.page,
                perPage: data.perPage,
            },
        });
        return res.data;
    } catch (err) {
        console.log('Lỗi', err);
    }
};

const getFollowing = async (data) => {
    try {
        let res = await request.get('me/followings', {
            params: {
                page: data.page,
            },
        });
        return res.data;
    } catch (err) {
        console.log('Lỗi', err);
    }
};

export { getSuggested, getFollowing };
