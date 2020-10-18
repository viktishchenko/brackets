module.exports = function check(str, bracketsConfig) {
    let st = str;
    let br = bracketsConfig.map((el) => el.join(""));
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < br.length; j++) {
            st = st.replace(br[j], "");
        }
        if (!st) return true;
    }
    return false;
};
