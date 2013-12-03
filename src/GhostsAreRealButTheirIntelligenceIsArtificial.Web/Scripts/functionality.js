function addUniversalStartTimePropertiesToGame(game) {
    game.isMoving = {
        ciccone: false,
        foo: false,
        bar: false,
        baz: false,
        qux: false
    };
    game.isStarted = false;
    game.isUnlocked = false;
    game.locations = {
        hyperspaceTo: "Az",
        ciccone: ["Az", "Az"],
        foo: "Az",
        bar: "Az",
        baz: "Az",
        qux: "Az"
    };
    game.margins = {
        ciccone: [755, -25],
        foo: [785, -25],
        bar: [815, -25],
        baz: [845, -25],
        qux: [875, -25]
    };
    game.score = 0;
	return game;
}

function isAbleToMoveDown(game, cell) {
    var neighbor = getCellValue(game, getCellDown(cell));
    if (neighbor.indexOf("barricade") == -1) {
        if (neighbor.indexOf("trapdoor") == -1) {
            return true;
        } else {
            if (game.isUnlocked) {
                return true;
            }
        }
    }
    return false;
}

function isAbleToMoveLeft(game, cell) {
    var neighbor = getCellValue(game, getCellLeft(cell));
    if (neighbor.indexOf("barricade") == -1) {
        if (neighbor.indexOf("trapdoor") == -1) {
            return true;
        } else {
            if (game.isUnlocked) {
                return true;
            }
        }
    }
    return false;
}

function isAbleToMoveRight(game, cell) {
    var neighbor = getCellValue(game, getCellRight(cell));
    if (neighbor.indexOf("barricade") == -1) {
        if (neighbor.indexOf("trapdoor") == -1) {
            return true;
        } else {
            if (game.isUnlocked) {
                return true;
            }
        }
    }
    return false;
}

function isAbleToMoveUp(game, cell) {
    var neighbor = getCellValue(game, getCellUp(cell));
    if (neighbor.indexOf("barricade") == -1) {
        if (neighbor.indexOf("trapdoor") == -1) {
            return true;
        } else {
            if (game.isUnlocked) {
                return true;
            }
        }
    }
    return false;
}

function  getCellDown(cell) {
    var dictionary = neighborLookupService();
    var neighbors = dictionary[cell];
    return neighbors.down;
}

function  getCellLeft(cell) {
    var dictionary = neighborLookupService();
    var neighbors = dictionary[cell];
    return neighbors.left;
}

function  getCellRight(cell) {
    var dictionary = neighborLookupService();
    var neighbors = dictionary[cell];
    return neighbors.right;
}

function  getCellUp(cell) {
    var dictionary = neighborLookupService();
    var neighbors = dictionary[cell];
    return neighbors.up;
}

function neighborLookupService() {
    var dictionary = { "Aa": { down: "Ba", left: null, right: "Ab", up: null }, "Ab": { down: "Bb", left: "Aa", right: "Ac", up: null }, "Ac": { down: "Bc", left: "Ab", right: "Ad", up: null }, "Ad": { down: "Bd", left: "Ac", right: "Ae", up: null }, "Ae": { down: "Be", left: "Ad", right: "Af", up: null }, "Af": { down: "Bf", left: "Ae", right: "Ag", up: null }, "Ag": { down: "Bg", left: "Af", right: "Ah", up: null }, "Ah": { down: "Bh", left: "Ag", right: "Ai", up: null }, "Ai": { down: "Bi", left: "Ah", right: "Aj", up: null }, "Aj": { down: "Bj", left: "Ai", right: "Ak", up: null }, "Ak": { down: "Bk", left: "Aj", right: "Al", up: null }, "Al": { down: "Bl", left: "Ak", right: "Am", up: null }, "Am": { down: "Bm", left: "Al", right: "An", up: null }, "An": { down: "Bn", left: "Am", right: "Ao", up: null }, "Ao": { down: "Bo", left: "An", right: "Ap", up: null }, "Ap": { down: "Bp", left: "Ao", right: "Aq", up: null }, "Aq": { down: "Bq", left: "Ap", right: "Ar", up: null }, "Ar": { down: "Br", left: "Aq", right: "As", up: null }, "As": { down: "Bs", left: "Ar", right: "At", up: null }, "At": { down: "Bt", left: "As", right: "Au", up: null }, "Au": { down: "Bu", left: "At", right: "Av", up: null }, "Av": { down: "Bv", left: "Au", right: "Aw", up: null }, "Aw": { down: "Bw", left: "Av", right: "Ax", up: null }, "Ax": { down: "Bx", left: "Aw", right: "Ay", up: null }, "Ay": { down: "By", left: "Ax", right: "Az", up: null }, "Az": { down: "Bz", left: "Ay", right: null, up: null }, "Ba": { down: "Ca", left: null, right: "Bb", up: "Aa" }, "Bb": { down: "Cb", left: "Ba", right: "Bc", up: "Ab" }, "Bc": { down: "Cc", left: "Bb", right: "Bd", up: "Ac" }, "Bd": { down: "Cd", left: "Bc", right: "Be", up: "Ad" }, "Be": { down: "Ce", left: "Bd", right: "Bf", up: "Ae" }, "Bf": { down: "Cf", left: "Be", right: "Bg", up: "Af" }, "Bg": { down: "Cg", left: "Bf", right: "Bh", up: "Ag" }, "Bh": { down: "Ch", left: "Bg", right: "Bi", up: "Ah" }, "Bi": { down: "Ci", left: "Bh", right: "Bj", up: "Ai" }, "Bj": { down: "Cj", left: "Bi", right: "Bk", up: "Aj" }, "Bk": { down: "Ck", left: "Bj", right: "Bl", up: "Ak" }, "Bl": { down: "Cl", left: "Bk", right: "Bm", up: "Al" }, "Bm": { down: "Cm", left: "Bl", right: "Bn", up: "Am" }, "Bn": { down: "Cn", left: "Bm", right: "Bo", up: "An" }, "Bo": { down: "Co", left: "Bn", right: "Bp", up: "Ao" }, "Bp": { down: "Cp", left: "Bo", right: "Bq", up: "Ap" }, "Bq": { down: "Cq", left: "Bp", right: "Br", up: "Aq" }, "Br": { down: "Cr", left: "Bq", right: "Bs", up: "Ar" }, "Bs": { down: "Cs", left: "Br", right: "Bt", up: "As" }, "Bt": { down: "Ct", left: "Bs", right: "Bu", up: "At" }, "Bu": { down: "Cu", left: "Bt", right: "Bv", up: "Au" }, "Bv": { down: "Cv", left: "Bu", right: "Bw", up: "Av" }, "Bw": { down: "Cw", left: "Bv", right: "Bx", up: "Aw" }, "Bx": { down: "Cx", left: "Bw", right: "By", up: "Ax" }, "By": { down: "Cy", left: "Bx", right: "Bz", up: "Ay" }, "Bz": { down: "Cz", left: "By", right: null, up: "Az" }, "Ca": { down: "Da", left: null, right: "Cb", up: "Ba" }, "Cb": { down: "Db", left: "Ca", right: "Cc", up: "Bb" }, "Cc": { down: "Dc", left: "Cb", right: "Cd", up: "Bc" }, "Cd": { down: "Dd", left: "Cc", right: "Ce", up: "Bd" }, "Ce": { down: "De", left: "Cd", right: "Cf", up: "Be" }, "Cf": { down: "Df", left: "Ce", right: "Cg", up: "Bf" }, "Cg": { down: "Dg", left: "Cf", right: "Ch", up: "Bg" }, "Ch": { down: "Dh", left: "Cg", right: "Ci", up: "Bh" }, "Ci": { down: "Di", left: "Ch", right: "Cj", up: "Bi" }, "Cj": { down: "Dj", left: "Ci", right: "Ck", up: "Bj" }, "Ck": { down: "Dk", left: "Cj", right: "Cl", up: "Bk" }, "Cl": { down: "Dl", left: "Ck", right: "Cm", up: "Bl" }, "Cm": { down: "Dm", left: "Cl", right: "Cn", up: "Bm" }, "Cn": { down: "Dn", left: "Cm", right: "Co", up: "Bn" }, "Co": { down: "Do", left: "Cn", right: "Cp", up: "Bo" }, "Cp": { down: "Dp", left: "Co", right: "Cq", up: "Bp" }, "Cq": { down: "Dq", left: "Cp", right: "Cr", up: "Bq" }, "Cr": { down: "Dr", left: "Cq", right: "Cs", up: "Br" }, "Cs": { down: "Ds", left: "Cr", right: "Ct", up: "Bs" }, "Ct": { down: "Dt", left: "Cs", right: "Cu", up: "Bt" }, "Cu": { down: "Du", left: "Ct", right: "Cv", up: "Bu" }, "Cv": { down: "Dv", left: "Cu", right: "Cw", up: "Bv" }, "Cw": { down: "Dw", left: "Cv", right: "Cx", up: "Bw" }, "Cx": { down: "Dx", left: "Cw", right: "Cy", up: "Bx" }, "Cy": { down: "Dy", left: "Cx", right: "Cz", up: "By" }, "Cz": { down: "Dz", left: "Cy", right: null, up: "Bz" }, "Da": { down: "Ea", left: null, right: "Db", up: "Ca" }, "Db": { down: "Eb", left: "Da", right: "Dc", up: "Cb" }, "Dc": { down: "Ec", left: "Db", right: "Dd", up: "Cc" }, "Dd": { down: "Ed", left: "Dc", right: "De", up: "Cd" }, "De": { down: "Ee", left: "Dd", right: "Df", up: "Ce" }, "Df": { down: "Ef", left: "De", right: "Dg", up: "Cf" }, "Dg": { down: "Eg", left: "Df", right: "Dh", up: "Cg" }, "Dh": { down: "Eh", left: "Dg", right: "Di", up: "Ch" }, "Di": { down: "Ei", left: "Dh", right: "Dj", up: "Ci" }, "Dj": { down: "Ej", left: "Di", right: "Dk", up: "Cj" }, "Dk": { down: "Ek", left: "Dj", right: "Dl", up: "Ck" }, "Dl": { down: "El", left: "Dk", right: "Dm", up: "Cl" }, "Dm": { down: "Em", left: "Dl", right: "Dn", up: "Cm" }, "Dn": { down: "En", left: "Dm", right: "Do", up: "Cn" }, "Do": { down: "Eo", left: "Dn", right: "Dp", up: "Co" }, "Dp": { down: "Ep", left: "Do", right: "Dq", up: "Cp" }, "Dq": { down: "Eq", left: "Dp", right: "Dr", up: "Cq" }, "Dr": { down: "Er", left: "Dq", right: "Ds", up: "Cr" }, "Ds": { down: "Es", left: "Dr", right: "Dt", up: "Cs" }, "Dt": { down: "Et", left: "Ds", right: "Du", up: "Ct" }, "Du": { down: "Eu", left: "Dt", right: "Dv", up: "Cu" }, "Dv": { down: "Ev", left: "Du", right: "Dw", up: "Cv" }, "Dw": { down: "Ew", left: "Dv", right: "Dx", up: "Cw" }, "Dx": { down: "Ex", left: "Dw", right: "Dy", up: "Cx" }, "Dy": { down: "Ey", left: "Dx", right: "Dz", up: "Cy" }, "Dz": { down: "Ez", left: "Dy", right: null, up: "Cz" }, "Ea": { down: "Fa", left: null, right: "Eb", up: "Da" }, "Eb": { down: "Fb", left: "Ea", right: "Ec", up: "Db" }, "Ec": { down: "Fc", left: "Eb", right: "Ed", up: "Dc" }, "Ed": { down: "Fd", left: "Ec", right: "Ee", up: "Dd" }, "Ee": { down: "Fe", left: "Ed", right: "Ef", up: "De" }, "Ef": { down: "Ff", left: "Ee", right: "Eg", up: "Df" }, "Eg": { down: "Fg", left: "Ef", right: "Eh", up: "Dg" }, "Eh": { down: "Fh", left: "Eg", right: "Ei", up: "Dh" }, "Ei": { down: "Fi", left: "Eh", right: "Ej", up: "Di" }, "Ej": { down: "Fj", left: "Ei", right: "Ek", up: "Dj" }, "Ek": { down: "Fk", left: "Ej", right: "El", up: "Dk" }, "El": { down: "Fl", left: "Ek", right: "Em", up: "Dl" }, "Em": { down: "Fm", left: "El", right: "En", up: "Dm" }, "En": { down: "Fn", left: "Em", right: "Eo", up: "Dn" }, "Eo": { down: "Fo", left: "En", right: "Ep", up: "Do" }, "Ep": { down: "Fp", left: "Eo", right: "Eq", up: "Dp" }, "Eq": { down: "Fq", left: "Ep", right: "Er", up: "Dq" }, "Er": { down: "Fr", left: "Eq", right: "Es", up: "Dr" }, "Es": { down: "Fs", left: "Er", right: "Et", up: "Ds" }, "Et": { down: "Ft", left: "Es", right: "Eu", up: "Dt" }, "Eu": { down: "Fu", left: "Et", right: "Ev", up: "Du" }, "Ev": { down: "Fv", left: "Eu", right: "Ew", up: "Dv" }, "Ew": { down: "Fw", left: "Ev", right: "Ex", up: "Dw" }, "Ex": { down: "Fx", left: "Ew", right: "Ey", up: "Dx" }, "Ey": { down: "Fy", left: "Ex", right: "Ez", up: "Dy" }, "Ez": { down: "Fz", left: "Ey", right: null, up: "Dz" }, "Fa": { down: "Ga", left: null, right: "Fb", up: "Ea" }, "Fb": { down: "Gb", left: "Fa", right: "Fc", up: "Eb" }, "Fc": { down: "Gc", left: "Fb", right: "Fd", up: "Ec" }, "Fd": { down: "Gd", left: "Fc", right: "Fe", up: "Ed" }, "Fe": { down: "Ge", left: "Fd", right: "Ff", up: "Ee" }, "Ff": { down: "Gf", left: "Fe", right: "Fg", up: "Ef" }, "Fg": { down: "Gg", left: "Ff", right: "Fh", up: "Eg" }, "Fh": { down: "Gh", left: "Fg", right: "Fi", up: "Eh" }, "Fi": { down: "Gi", left: "Fh", right: "Fj", up: "Ei" }, "Fj": { down: "Gj", left: "Fi", right: "Fk", up: "Ej" }, "Fk": { down: "Gk", left: "Fj", right: "Fl", up: "Ek" }, "Fl": { down: "Gl", left: "Fk", right: "Fm", up: "El" }, "Fm": { down: "Gm", left: "Fl", right: "Fn", up: "Em" }, "Fn": { down: "Gn", left: "Fm", right: "Fo", up: "En" }, "Fo": { down: "Go", left: "Fn", right: "Fp", up: "Eo" }, "Fp": { down: "Gp", left: "Fo", right: "Fq", up: "Ep" }, "Fq": { down: "Gq", left: "Fp", right: "Fr", up: "Eq" }, "Fr": { down: "Gr", left: "Fq", right: "Fs", up: "Er" }, "Fs": { down: "Gs", left: "Fr", right: "Ft", up: "Es" }, "Ft": { down: "Gt", left: "Fs", right: "Fu", up: "Et" }, "Fu": { down: "Gu", left: "Ft", right: "Fv", up: "Eu" }, "Fv": { down: "Gv", left: "Fu", right: "Fw", up: "Ev" }, "Fw": { down: "Gw", left: "Fv", right: "Fx", up: "Ew" }, "Fx": { down: "Gx", left: "Fw", right: "Fy", up: "Ex" }, "Fy": { down: "Gy", left: "Fx", right: "Fz", up: "Ey" }, "Fz": { down: "Gz", left: "Fy", right: null, up: "Ez" }, "Ga": { down: "Ha", left: null, right: "Gb", up: "Fa" }, "Gb": { down: "Hb", left: "Ga", right: "Gc", up: "Fb" }, "Gc": { down: "Hc", left: "Gb", right: "Gd", up: "Fc" }, "Gd": { down: "Hd", left: "Gc", right: "Ge", up: "Fd" }, "Ge": { down: "He", left: "Gd", right: "Gf", up: "Fe" }, "Gf": { down: "Hf", left: "Ge", right: "Gg", up: "Ff" }, "Gg": { down: "Hg", left: "Gf", right: "Gh", up: "Fg" }, "Gh": { down: "Hh", left: "Gg", right: "Gi", up: "Fh" }, "Gi": { down: "Hi", left: "Gh", right: "Gj", up: "Fi" }, "Gj": { down: "Hj", left: "Gi", right: "Gk", up: "Fj" }, "Gk": { down: "Hk", left: "Gj", right: "Gl", up: "Fk" }, "Gl": { down: "Hl", left: "Gk", right: "Gm", up: "Fl" }, "Gm": { down: "Hm", left: "Gl", right: "Gn", up: "Fm" }, "Gn": { down: "Hn", left: "Gm", right: "Go", up: "Fn" }, "Go": { down: "Ho", left: "Gn", right: "Gp", up: "Fo" }, "Gp": { down: "Hp", left: "Go", right: "Gq", up: "Fp" }, "Gq": { down: "Hq", left: "Gp", right: "Gr", up: "Fq" }, "Gr": { down: "Hr", left: "Gq", right: "Gs", up: "Fr" }, "Gs": { down: "Hs", left: "Gr", right: "Gt", up: "Fs" }, "Gt": { down: "Ht", left: "Gs", right: "Gu", up: "Ft" }, "Gu": { down: "Hu", left: "Gt", right: "Gv", up: "Fu" }, "Gv": { down: "Hv", left: "Gu", right: "Gw", up: "Fv" }, "Gw": { down: "Hw", left: "Gv", right: "Gx", up: "Fw" }, "Gx": { down: "Hx", left: "Gw", right: "Gy", up: "Fx" }, "Gy": { down: "Hy", left: "Gx", right: "Gz", up: "Fy" }, "Gz": { down: "Hz", left: "Gy", right: null, up: "Fz" }, "Ha": { down: "Ia", left: null, right: "Hb", up: "Ga" }, "Hb": { down: "Ib", left: "Ha", right: "Hc", up: "Gb" }, "Hc": { down: "Ic", left: "Hb", right: "Hd", up: "Gc" }, "Hd": { down: "Id", left: "Hc", right: "He", up: "Gd" }, "He": { down: "Ie", left: "Hd", right: "Hf", up: "Ge" }, "Hf": { down: "If", left: "He", right: "Hg", up: "Gf" }, "Hg": { down: "Ig", left: "Hf", right: "Hh", up: "Gg" }, "Hh": { down: "Ih", left: "Hg", right: "Hi", up: "Gh" }, "Hi": { down: "Ii", left: "Hh", right: "Hj", up: "Gi" }, "Hj": { down: "Ij", left: "Hi", right: "Hk", up: "Gj" }, "Hk": { down: "Ik", left: "Hj", right: "Hl", up: "Gk" }, "Hl": { down: "Il", left: "Hk", right: "Hm", up: "Gl" }, "Hm": { down: "Im", left: "Hl", right: "Hn", up: "Gm" }, "Hn": { down: "In", left: "Hm", right: "Ho", up: "Gn" }, "Ho": { down: "Io", left: "Hn", right: "Hp", up: "Go" }, "Hp": { down: "Ip", left: "Ho", right: "Hq", up: "Gp" }, "Hq": { down: "Iq", left: "Hp", right: "Hr", up: "Gq" }, "Hr": { down: "Ir", left: "Hq", right: "Hs", up: "Gr" }, "Hs": { down: "Is", left: "Hr", right: "Ht", up: "Gs" }, "Ht": { down: "It", left: "Hs", right: "Hu", up: "Gt" }, "Hu": { down: "Iu", left: "Ht", right: "Hv", up: "Gu" }, "Hv": { down: "Iv", left: "Hu", right: "Hw", up: "Gv" }, "Hw": { down: "Iw", left: "Hv", right: "Hx", up: "Gw" }, "Hx": { down: "Ix", left: "Hw", right: "Hy", up: "Gx" }, "Hy": { down: "Iy", left: "Hx", right: "Hz", up: "Gy" }, "Hz": { down: "Iz", left: "Hy", right: null, up: "Gz" }, "Ia": { down: "Ja", left: null, right: "Ib", up: "Ha" }, "Ib": { down: "Jb", left: "Ia", right: "Ic", up: "Hb" }, "Ic": { down: "Jc", left: "Ib", right: "Id", up: "Hc" }, "Id": { down: "Jd", left: "Ic", right: "Ie", up: "Hd" }, "Ie": { down: "Je", left: "Id", right: "If", up: "He" }, "If": { down: "Jf", left: "Ie", right: "Ig", up: "Hf" }, "Ig": { down: "Jg", left: "If", right: "Ih", up: "Hg" }, "Ih": { down: "Jh", left: "Ig", right: "Ii", up: "Hh" }, "Ii": { down: "Ji", left: "Ih", right: "Ij", up: "Hi" }, "Ij": { down: "Jj", left: "Ii", right: "Ik", up: "Hj" }, "Ik": { down: "Jk", left: "Ij", right: "Il", up: "Hk" }, "Il": { down: "Jl", left: "Ik", right: "Im", up: "Hl" }, "Im": { down: "Jm", left: "Il", right: "In", up: "Hm" }, "In": { down: "Jn", left: "Im", right: "Io", up: "Hn" }, "Io": { down: "Jo", left: "In", right: "Ip", up: "Ho" }, "Ip": { down: "Jp", left: "Io", right: "Iq", up: "Hp" }, "Iq": { down: "Jq", left: "Ip", right: "Ir", up: "Hq" }, "Ir": { down: "Jr", left: "Iq", right: "Is", up: "Hr" }, "Is": { down: "Js", left: "Ir", right: "It", up: "Hs" }, "It": { down: "Jt", left: "Is", right: "Iu", up: "Ht" }, "Iu": { down: "Ju", left: "It", right: "Iv", up: "Hu" }, "Iv": { down: "Jv", left: "Iu", right: "Iw", up: "Hv" }, "Iw": { down: "Jw", left: "Iv", right: "Ix", up: "Hw" }, "Ix": { down: "Jx", left: "Iw", right: "Iy", up: "Hx" }, "Iy": { down: "Jy", left: "Ix", right: "Iz", up: "Hy" }, "Iz": { down: "Jz", left: "Iy", right: null, up: "Hz" }, "Ja": { down: "Ka", left: null, right: "Jb", up: "Ia" }, "Jb": { down: "Kb", left: "Ja", right: "Jc", up: "Ib" }, "Jc": { down: "Kc", left: "Jb", right: "Jd", up: "Ic" }, "Jd": { down: "Kd", left: "Jc", right: "Je", up: "Id" }, "Je": { down: "Ke", left: "Jd", right: "Jf", up: "Ie" }, "Jf": { down: "Kf", left: "Je", right: "Jg", up: "If" }, "Jg": { down: "Kg", left: "Jf", right: "Jh", up: "Ig" }, "Jh": { down: "Kh", left: "Jg", right: "Ji", up: "Ih" }, "Ji": { down: "Ki", left: "Jh", right: "Jj", up: "Ii" }, "Jj": { down: "Kj", left: "Ji", right: "Jk", up: "Ij" }, "Jk": { down: "Kk", left: "Jj", right: "Jl", up: "Ik" }, "Jl": { down: "Kl", left: "Jk", right: "Jm", up: "Il" }, "Jm": { down: "Km", left: "Jl", right: "Jn", up: "Im" }, "Jn": { down: "Kn", left: "Jm", right: "Jo", up: "In" }, "Jo": { down: "Ko", left: "Jn", right: "Jp", up: "Io" }, "Jp": { down: "Kp", left: "Jo", right: "Jq", up: "Ip" }, "Jq": { down: "Kq", left: "Jp", right: "Jr", up: "Iq" }, "Jr": { down: "Kr", left: "Jq", right: "Js", up: "Ir" }, "Js": { down: "Ks", left: "Jr", right: "Jt", up: "Is" }, "Jt": { down: "Kt", left: "Js", right: "Ju", up: "It" }, "Ju": { down: "Ku", left: "Jt", right: "Jv", up: "Iu" }, "Jv": { down: "Kv", left: "Ju", right: "Jw", up: "Iv" }, "Jw": { down: "Kw", left: "Jv", right: "Jx", up: "Iw" }, "Jx": { down: "Kx", left: "Jw", right: "Jy", up: "Ix" }, "Jy": { down: "Ky", left: "Jx", right: "Jz", up: "Iy" }, "Jz": { down: "Kz", left: "Jy", right: null, up: "Iz" }, "Ka": { down: "La", left: null, right: "Kb", up: "Ja" }, "Kb": { down: "Lb", left: "Ka", right: "Kc", up: "Jb" }, "Kc": { down: "Lc", left: "Kb", right: "Kd", up: "Jc" }, "Kd": { down: "Ld", left: "Kc", right: "Ke", up: "Jd" }, "Ke": { down: "Le", left: "Kd", right: "Kf", up: "Je" }, "Kf": { down: "Lf", left: "Ke", right: "Kg", up: "Jf" }, "Kg": { down: "Lg", left: "Kf", right: "Kh", up: "Jg" }, "Kh": { down: "Lh", left: "Kg", right: "Ki", up: "Jh" }, "Ki": { down: "Li", left: "Kh", right: "Kj", up: "Ji" }, "Kj": { down: "Lj", left: "Ki", right: "Kk", up: "Jj" }, "Kk": { down: "Lk", left: "Kj", right: "Kl", up: "Jk" }, "Kl": { down: "Ll", left: "Kk", right: "Km", up: "Jl" }, "Km": { down: "Lm", left: "Kl", right: "Kn", up: "Jm" }, "Kn": { down: "Ln", left: "Km", right: "Ko", up: "Jn" }, "Ko": { down: "Lo", left: "Kn", right: "Kp", up: "Jo" }, "Kp": { down: "Lp", left: "Ko", right: "Kq", up: "Jp" }, "Kq": { down: "Lq", left: "Kp", right: "Kr", up: "Jq" }, "Kr": { down: "Lr", left: "Kq", right: "Ks", up: "Jr" }, "Ks": { down: "Ls", left: "Kr", right: "Kt", up: "Js" }, "Kt": { down: "Lt", left: "Ks", right: "Ku", up: "Jt" }, "Ku": { down: "Lu", left: "Kt", right: "Kv", up: "Ju" }, "Kv": { down: "Lv", left: "Ku", right: "Kw", up: "Jv" }, "Kw": { down: "Lw", left: "Kv", right: "Kx", up: "Jw" }, "Kx": { down: "Lx", left: "Kw", right: "Ky", up: "Jx" }, "Ky": { down: "Ly", left: "Kx", right: "Kz", up: "Jy" }, "Kz": { down: "Lz", left: "Ky", right: null, up: "Jz" }, "La": { down: "Ma", left: null, right: "Lb", up: "Ka" }, "Lb": { down: "Mb", left: "La", right: "Lc", up: "Kb" }, "Lc": { down: "Mc", left: "Lb", right: "Ld", up: "Kc" }, "Ld": { down: "Md", left: "Lc", right: "Le", up: "Kd" }, "Le": { down: "Me", left: "Ld", right: "Lf", up: "Ke" }, "Lf": { down: "Mf", left: "Le", right: "Lg", up: "Kf" }, "Lg": { down: "Mg", left: "Lf", right: "Lh", up: "Kg" }, "Lh": { down: "Mh", left: "Lg", right: "Li", up: "Kh" }, "Li": { down: "Mi", left: "Lh", right: "Lj", up: "Ki" }, "Lj": { down: "Mj", left: "Li", right: "Lk", up: "Kj" }, "Lk": { down: "Mk", left: "Lj", right: "Ll", up: "Kk" }, "Ll": { down: "Ml", left: "Lk", right: "Lm", up: "Kl" }, "Lm": { down: "Mm", left: "Ll", right: "Ln", up: "Km" }, "Ln": { down: "Mn", left: "Lm", right: "Lo", up: "Kn" }, "Lo": { down: "Mo", left: "Ln", right: "Lp", up: "Ko" }, "Lp": { down: "Mp", left: "Lo", right: "Lq", up: "Kp" }, "Lq": { down: "Mq", left: "Lp", right: "Lr", up: "Kq" }, "Lr": { down: "Mr", left: "Lq", right: "Ls", up: "Kr" }, "Ls": { down: "Ms", left: "Lr", right: "Lt", up: "Ks" }, "Lt": { down: "Mt", left: "Ls", right: "Lu", up: "Kt" }, "Lu": { down: "Mu", left: "Lt", right: "Lv", up: "Ku" }, "Lv": { down: "Mv", left: "Lu", right: "Lw", up: "Kv" }, "Lw": { down: "Mw", left: "Lv", right: "Lx", up: "Kw" }, "Lx": { down: "Mx", left: "Lw", right: "Ly", up: "Kx" }, "Ly": { down: "My", left: "Lx", right: "Lz", up: "Ky" }, "Lz": { down: "Mz", left: "Ly", right: null, up: "Kz" }, "Ma": { down: "Na", left: null, right: "Mb", up: "La" }, "Mb": { down: "Nb", left: "Ma", right: "Mc", up: "Lb" }, "Mc": { down: "Nc", left: "Mb", right: "Md", up: "Lc" }, "Md": { down: "Nd", left: "Mc", right: "Me", up: "Ld" }, "Me": { down: "Ne", left: "Md", right: "Mf", up: "Le" }, "Mf": { down: "Nf", left: "Me", right: "Mg", up: "Lf" }, "Mg": { down: "Ng", left: "Mf", right: "Mh", up: "Lg" }, "Mh": { down: "Nh", left: "Mg", right: "Mi", up: "Lh" }, "Mi": { down: "Ni", left: "Mh", right: "Mj", up: "Li" }, "Mj": { down: "Nj", left: "Mi", right: "Mk", up: "Lj" }, "Mk": { down: "Nk", left: "Mj", right: "Ml", up: "Lk" }, "Ml": { down: "Nl", left: "Mk", right: "Mm", up: "Ll" }, "Mm": { down: "Nm", left: "Ml", right: "Mn", up: "Lm" }, "Mn": { down: "Nn", left: "Mm", right: "Mo", up: "Ln" }, "Mo": { down: "No", left: "Mn", right: "Mp", up: "Lo" }, "Mp": { down: "Np", left: "Mo", right: "Mq", up: "Lp" }, "Mq": { down: "Nq", left: "Mp", right: "Mr", up: "Lq" }, "Mr": { down: "Nr", left: "Mq", right: "Ms", up: "Lr" }, "Ms": { down: "Ns", left: "Mr", right: "Mt", up: "Ls" }, "Mt": { down: "Nt", left: "Ms", right: "Mu", up: "Lt" }, "Mu": { down: "Nu", left: "Mt", right: "Mv", up: "Lu" }, "Mv": { down: "Nv", left: "Mu", right: "Mw", up: "Lv" }, "Mw": { down: "Nw", left: "Mv", right: "Mx", up: "Lw" }, "Mx": { down: "Nx", left: "Mw", right: "My", up: "Lx" }, "My": { down: "Ny", left: "Mx", right: "Mz", up: "Ly" }, "Mz": { down: "Nz", left: "My", right: null, up: "Lz" }, "Na": { down: "Oa", left: null, right: "Nb", up: "Ma" }, "Nb": { down: "Ob", left: "Na", right: "Nc", up: "Mb" }, "Nc": { down: "Oc", left: "Nb", right: "Nd", up: "Mc" }, "Nd": { down: "Od", left: "Nc", right: "Ne", up: "Md" }, "Ne": { down: "Oe", left: "Nd", right: "Nf", up: "Me" }, "Nf": { down: "Of", left: "Ne", right: "Ng", up: "Mf" }, "Ng": { down: "Og", left: "Nf", right: "Nh", up: "Mg" }, "Nh": { down: "Oh", left: "Ng", right: "Ni", up: "Mh" }, "Ni": { down: "Oi", left: "Nh", right: "Nj", up: "Mi" }, "Nj": { down: "Oj", left: "Ni", right: "Nk", up: "Mj" }, "Nk": { down: "Ok", left: "Nj", right: "Nl", up: "Mk" }, "Nl": { down: "Ol", left: "Nk", right: "Nm", up: "Ml" }, "Nm": { down: "Om", left: "Nl", right: "Nn", up: "Mm" }, "Nn": { down: "On", left: "Nm", right: "No", up: "Mn" }, "No": { down: "Oo", left: "Nn", right: "Np", up: "Mo" }, "Np": { down: "Op", left: "No", right: "Nq", up: "Mp" }, "Nq": { down: "Oq", left: "Np", right: "Nr", up: "Mq" }, "Nr": { down: "Or", left: "Nq", right: "Ns", up: "Mr" }, "Ns": { down: "Os", left: "Nr", right: "Nt", up: "Ms" }, "Nt": { down: "Ot", left: "Ns", right: "Nu", up: "Mt" }, "Nu": { down: "Ou", left: "Nt", right: "Nv", up: "Mu" }, "Nv": { down: "Ov", left: "Nu", right: "Nw", up: "Mv" }, "Nw": { down: "Ow", left: "Nv", right: "Nx", up: "Mw" }, "Nx": { down: "Ox", left: "Nw", right: "Ny", up: "Mx" }, "Ny": { down: "Oy", left: "Nx", right: "Nz", up: "My" }, "Nz": { down: "Oz", left: "Ny", right: null, up: "Mz" }, "Oa": { down: "Pa", left: null, right: "Ob", up: "Na" }, "Ob": { down: "Pb", left: "Oa", right: "Oc", up: "Nb" }, "Oc": { down: "Pc", left: "Ob", right: "Od", up: "Nc" }, "Od": { down: "Pd", left: "Oc", right: "Oe", up: "Nd" }, "Oe": { down: "Pe", left: "Od", right: "Of", up: "Ne" }, "Of": { down: "Pf", left: "Oe", right: "Og", up: "Nf" }, "Og": { down: "Pg", left: "Of", right: "Oh", up: "Ng" }, "Oh": { down: "Ph", left: "Og", right: "Oi", up: "Nh" }, "Oi": { down: "Pi", left: "Oh", right: "Oj", up: "Ni" }, "Oj": { down: "Pj", left: "Oi", right: "Ok", up: "Nj" }, "Ok": { down: "Pk", left: "Oj", right: "Ol", up: "Nk" }, "Ol": { down: "Pl", left: "Ok", right: "Om", up: "Nl" }, "Om": { down: "Pm", left: "Ol", right: "On", up: "Nm" }, "On": { down: "Pn", left: "Om", right: "Oo", up: "Nn" }, "Oo": { down: "Po", left: "On", right: "Op", up: "No" }, "Op": { down: "Pp", left: "Oo", right: "Oq", up: "Np" }, "Oq": { down: "Pq", left: "Op", right: "Or", up: "Nq" }, "Or": { down: "Pr", left: "Oq", right: "Os", up: "Nr" }, "Os": { down: "Ps", left: "Or", right: "Ot", up: "Ns" }, "Ot": { down: "Pt", left: "Os", right: "Ou", up: "Nt" }, "Ou": { down: "Pu", left: "Ot", right: "Ov", up: "Nu" }, "Ov": { down: "Pv", left: "Ou", right: "Ow", up: "Nv" }, "Ow": { down: "Pw", left: "Ov", right: "Ox", up: "Nw" }, "Ox": { down: "Px", left: "Ow", right: "Oy", up: "Nx" }, "Oy": { down: "Py", left: "Ox", right: "Oz", up: "Ny" }, "Oz": { down: "Pz", left: "Oy", right: null, up: "Nz" }, "Pa": { down: "Qa", left: null, right: "Pb", up: "Oa" }, "Pb": { down: "Qb", left: "Pa", right: "Pc", up: "Ob" }, "Pc": { down: "Qc", left: "Pb", right: "Pd", up: "Oc" }, "Pd": { down: "Qd", left: "Pc", right: "Pe", up: "Od" }, "Pe": { down: "Qe", left: "Pd", right: "Pf", up: "Oe" }, "Pf": { down: "Qf", left: "Pe", right: "Pg", up: "Of" }, "Pg": { down: "Qg", left: "Pf", right: "Ph", up: "Og" }, "Ph": { down: "Qh", left: "Pg", right: "Pi", up: "Oh" }, "Pi": { down: "Qi", left: "Ph", right: "Pj", up: "Oi" }, "Pj": { down: "Qj", left: "Pi", right: "Pk", up: "Oj" }, "Pk": { down: "Qk", left: "Pj", right: "Pl", up: "Ok" }, "Pl": { down: "Ql", left: "Pk", right: "Pm", up: "Ol" }, "Pm": { down: "Qm", left: "Pl", right: "Pn", up: "Om" }, "Pn": { down: "Qn", left: "Pm", right: "Po", up: "On" }, "Po": { down: "Qo", left: "Pn", right: "Pp", up: "Oo" }, "Pp": { down: "Qp", left: "Po", right: "Pq", up: "Op" }, "Pq": { down: "Qq", left: "Pp", right: "Pr", up: "Oq" }, "Pr": { down: "Qr", left: "Pq", right: "Ps", up: "Or" }, "Ps": { down: "Qs", left: "Pr", right: "Pt", up: "Os" }, "Pt": { down: "Qt", left: "Ps", right: "Pu", up: "Ot" }, "Pu": { down: "Qu", left: "Pt", right: "Pv", up: "Ou" }, "Pv": { down: "Qv", left: "Pu", right: "Pw", up: "Ov" }, "Pw": { down: "Qw", left: "Pv", right: "Px", up: "Ow" }, "Px": { down: "Qx", left: "Pw", right: "Py", up: "Ox" }, "Py": { down: "Qy", left: "Px", right: "Pz", up: "Oy" }, "Pz": { down: "Qz", left: "Py", right: null, up: "Oz" }, "Qa": { down: "Ra", left: null, right: "Qb", up: "Pa" }, "Qb": { down: "Rb", left: "Qa", right: "Qc", up: "Pb" }, "Qc": { down: "Rc", left: "Qb", right: "Qd", up: "Pc" }, "Qd": { down: "Rd", left: "Qc", right: "Qe", up: "Pd" }, "Qe": { down: "Re", left: "Qd", right: "Qf", up: "Pe" }, "Qf": { down: "Rf", left: "Qe", right: "Qg", up: "Pf" }, "Qg": { down: "Rg", left: "Qf", right: "Qh", up: "Pg" }, "Qh": { down: "Rh", left: "Qg", right: "Qi", up: "Ph" }, "Qi": { down: "Ri", left: "Qh", right: "Qj", up: "Pi" }, "Qj": { down: "Rj", left: "Qi", right: "Qk", up: "Pj" }, "Qk": { down: "Rk", left: "Qj", right: "Ql", up: "Pk" }, "Ql": { down: "Rl", left: "Qk", right: "Qm", up: "Pl" }, "Qm": { down: "Rm", left: "Ql", right: "Qn", up: "Pm" }, "Qn": { down: "Rn", left: "Qm", right: "Qo", up: "Pn" }, "Qo": { down: "Ro", left: "Qn", right: "Qp", up: "Po" }, "Qp": { down: "Rp", left: "Qo", right: "Qq", up: "Pp" }, "Qq": { down: "Rq", left: "Qp", right: "Qr", up: "Pq" }, "Qr": { down: "Rr", left: "Qq", right: "Qs", up: "Pr" }, "Qs": { down: "Rs", left: "Qr", right: "Qt", up: "Ps" }, "Qt": { down: "Rt", left: "Qs", right: "Qu", up: "Pt" }, "Qu": { down: "Ru", left: "Qt", right: "Qv", up: "Pu" }, "Qv": { down: "Rv", left: "Qu", right: "Qw", up: "Pv" }, "Qw": { down: "Rw", left: "Qv", right: "Qx", up: "Pw" }, "Qx": { down: "Rx", left: "Qw", right: "Qy", up: "Px" }, "Qy": { down: "Ry", left: "Qx", right: "Qz", up: "Py" }, "Qz": { down: "Rz", left: "Qy", right: null, up: "Pz" }, "Ra": { down: "Sa", left: null, right: "Rb", up: "Qa" }, "Rb": { down: "Sb", left: "Ra", right: "Rc", up: "Qb" }, "Rc": { down: "Sc", left: "Rb", right: "Rd", up: "Qc" }, "Rd": { down: "Sd", left: "Rc", right: "Re", up: "Qd" }, "Re": { down: "Se", left: "Rd", right: "Rf", up: "Qe" }, "Rf": { down: "Sf", left: "Re", right: "Rg", up: "Qf" }, "Rg": { down: "Sg", left: "Rf", right: "Rh", up: "Qg" }, "Rh": { down: "Sh", left: "Rg", right: "Ri", up: "Qh" }, "Ri": { down: "Si", left: "Rh", right: "Rj", up: "Qi" }, "Rj": { down: "Sj", left: "Ri", right: "Rk", up: "Qj" }, "Rk": { down: "Sk", left: "Rj", right: "Rl", up: "Qk" }, "Rl": { down: "Sl", left: "Rk", right: "Rm", up: "Ql" }, "Rm": { down: "Sm", left: "Rl", right: "Rn", up: "Qm" }, "Rn": { down: "Sn", left: "Rm", right: "Ro", up: "Qn" }, "Ro": { down: "So", left: "Rn", right: "Rp", up: "Qo" }, "Rp": { down: "Sp", left: "Ro", right: "Rq", up: "Qp" }, "Rq": { down: "Sq", left: "Rp", right: "Rr", up: "Qq" }, "Rr": { down: "Sr", left: "Rq", right: "Rs", up: "Qr" }, "Rs": { down: "Ss", left: "Rr", right: "Rt", up: "Qs" }, "Rt": { down: "St", left: "Rs", right: "Ru", up: "Qt" }, "Ru": { down: "Su", left: "Rt", right: "Rv", up: "Qu" }, "Rv": { down: "Sv", left: "Ru", right: "Rw", up: "Qv" }, "Rw": { down: "Sw", left: "Rv", right: "Rx", up: "Qw" }, "Rx": { down: "Sx", left: "Rw", right: "Ry", up: "Qx" }, "Ry": { down: "Sy", left: "Rx", right: "Rz", up: "Qy" }, "Rz": { down: "Sz", left: "Ry", right: null, up: "Qz" }, "Sa": { down: "Ta", left: null, right: "Sb", up: "Ra" }, "Sb": { down: "Tb", left: "Sa", right: "Sc", up: "Rb" }, "Sc": { down: "Tc", left: "Sb", right: "Sd", up: "Rc" }, "Sd": { down: "Td", left: "Sc", right: "Se", up: "Rd" }, "Se": { down: "Te", left: "Sd", right: "Sf", up: "Re" }, "Sf": { down: "Tf", left: "Se", right: "Sg", up: "Rf" }, "Sg": { down: "Tg", left: "Sf", right: "Sh", up: "Rg" }, "Sh": { down: "Th", left: "Sg", right: "Si", up: "Rh" }, "Si": { down: "Ti", left: "Sh", right: "Sj", up: "Ri" }, "Sj": { down: "Tj", left: "Si", right: "Sk", up: "Rj" }, "Sk": { down: "Tk", left: "Sj", right: "Sl", up: "Rk" }, "Sl": { down: "Tl", left: "Sk", right: "Sm", up: "Rl" }, "Sm": { down: "Tm", left: "Sl", right: "Sn", up: "Rm" }, "Sn": { down: "Tn", left: "Sm", right: "So", up: "Rn" }, "So": { down: "To", left: "Sn", right: "Sp", up: "Ro" }, "Sp": { down: "Tp", left: "So", right: "Sq", up: "Rp" }, "Sq": { down: "Tq", left: "Sp", right: "Sr", up: "Rq" }, "Sr": { down: "Tr", left: "Sq", right: "Ss", up: "Rr" }, "Ss": { down: "Ts", left: "Sr", right: "St", up: "Rs" }, "St": { down: "Tt", left: "Ss", right: "Su", up: "Rt" }, "Su": { down: "Tu", left: "St", right: "Sv", up: "Ru" }, "Sv": { down: "Tv", left: "Su", right: "Sw", up: "Rv" }, "Sw": { down: "Tw", left: "Sv", right: "Sx", up: "Rw" }, "Sx": { down: "Tx", left: "Sw", right: "Sy", up: "Rx" }, "Sy": { down: "Ty", left: "Sx", right: "Sz", up: "Ry" }, "Sz": { down: "Tz", left: "Sy", right: null, up: "Rz" }, "Ta": { down: "Ua", left: null, right: "Tb", up: "Sa" }, "Tb": { down: "Ub", left: "Ta", right: "Tc", up: "Sb" }, "Tc": { down: "Uc", left: "Tb", right: "Td", up: "Sc" }, "Td": { down: "Ud", left: "Tc", right: "Te", up: "Sd" }, "Te": { down: "Ue", left: "Td", right: "Tf", up: "Se" }, "Tf": { down: "Uf", left: "Te", right: "Tg", up: "Sf" }, "Tg": { down: "Ug", left: "Tf", right: "Th", up: "Sg" }, "Th": { down: "Uh", left: "Tg", right: "Ti", up: "Sh" }, "Ti": { down: "Ui", left: "Th", right: "Tj", up: "Si" }, "Tj": { down: "Uj", left: "Ti", right: "Tk", up: "Sj" }, "Tk": { down: "Uk", left: "Tj", right: "Tl", up: "Sk" }, "Tl": { down: "Ul", left: "Tk", right: "Tm", up: "Sl" }, "Tm": { down: "Um", left: "Tl", right: "Tn", up: "Sm" }, "Tn": { down: "Un", left: "Tm", right: "To", up: "Sn" }, "To": { down: "Uo", left: "Tn", right: "Tp", up: "So" }, "Tp": { down: "Up", left: "To", right: "Tq", up: "Sp" }, "Tq": { down: "Uq", left: "Tp", right: "Tr", up: "Sq" }, "Tr": { down: "Ur", left: "Tq", right: "Ts", up: "Sr" }, "Ts": { down: "Us", left: "Tr", right: "Tt", up: "Ss" }, "Tt": { down: "Ut", left: "Ts", right: "Tu", up: "St" }, "Tu": { down: "Uu", left: "Tt", right: "Tv", up: "Su" }, "Tv": { down: "Uv", left: "Tu", right: "Tw", up: "Sv" }, "Tw": { down: "Uw", left: "Tv", right: "Tx", up: "Sw" }, "Tx": { down: "Ux", left: "Tw", right: "Ty", up: "Sx" }, "Ty": { down: "Uy", left: "Tx", right: "Tz", up: "Sy" }, "Tz": { down: "Uz", left: "Ty", right: null, up: "Sz" }, "Ua": { down: "Va", left: null, right: "Ub", up: "Ta" }, "Ub": { down: "Vb", left: "Ua", right: "Uc", up: "Tb" }, "Uc": { down: "Vc", left: "Ub", right: "Ud", up: "Tc" }, "Ud": { down: "Vd", left: "Uc", right: "Ue", up: "Td" }, "Ue": { down: "Ve", left: "Ud", right: "Uf", up: "Te" }, "Uf": { down: "Vf", left: "Ue", right: "Ug", up: "Tf" }, "Ug": { down: "Vg", left: "Uf", right: "Uh", up: "Tg" }, "Uh": { down: "Vh", left: "Ug", right: "Ui", up: "Th" }, "Ui": { down: "Vi", left: "Uh", right: "Uj", up: "Ti" }, "Uj": { down: "Vj", left: "Ui", right: "Uk", up: "Tj" }, "Uk": { down: "Vk", left: "Uj", right: "Ul", up: "Tk" }, "Ul": { down: "Vl", left: "Uk", right: "Um", up: "Tl" }, "Um": { down: "Vm", left: "Ul", right: "Un", up: "Tm" }, "Un": { down: "Vn", left: "Um", right: "Uo", up: "Tn" }, "Uo": { down: "Vo", left: "Un", right: "Up", up: "To" }, "Up": { down: "Vp", left: "Uo", right: "Uq", up: "Tp" }, "Uq": { down: "Vq", left: "Up", right: "Ur", up: "Tq" }, "Ur": { down: "Vr", left: "Uq", right: "Us", up: "Tr" }, "Us": { down: "Vs", left: "Ur", right: "Ut", up: "Ts" }, "Ut": { down: "Vt", left: "Us", right: "Uu", up: "Tt" }, "Uu": { down: "Vu", left: "Ut", right: "Uv", up: "Tu" }, "Uv": { down: "Vv", left: "Uu", right: "Uw", up: "Tv" }, "Uw": { down: "Vw", left: "Uv", right: "Ux", up: "Tw" }, "Ux": { down: "Vx", left: "Uw", right: "Uy", up: "Tx" }, "Uy": { down: "Vy", left: "Ux", right: "Uz", up: "Ty" }, "Uz": { down: "Vz", left: "Uy", right: null, up: "Tz" }, "Va": { down: "Wa", left: null, right: "Vb", up: "Ua" }, "Vb": { down: "Wb", left: "Va", right: "Vc", up: "Ub" }, "Vc": { down: "Wc", left: "Vb", right: "Vd", up: "Uc" }, "Vd": { down: "Wd", left: "Vc", right: "Ve", up: "Ud" }, "Ve": { down: "We", left: "Vd", right: "Vf", up: "Ue" }, "Vf": { down: "Wf", left: "Ve", right: "Vg", up: "Uf" }, "Vg": { down: "Wg", left: "Vf", right: "Vh", up: "Ug" }, "Vh": { down: "Wh", left: "Vg", right: "Vi", up: "Uh" }, "Vi": { down: "Wi", left: "Vh", right: "Vj", up: "Ui" }, "Vj": { down: "Wj", left: "Vi", right: "Vk", up: "Uj" }, "Vk": { down: "Wk", left: "Vj", right: "Vl", up: "Uk" }, "Vl": { down: "Wl", left: "Vk", right: "Vm", up: "Ul" }, "Vm": { down: "Wm", left: "Vl", right: "Vn", up: "Um" }, "Vn": { down: "Wn", left: "Vm", right: "Vo", up: "Un" }, "Vo": { down: "Wo", left: "Vn", right: "Vp", up: "Uo" }, "Vp": { down: "Wp", left: "Vo", right: "Vq", up: "Up" }, "Vq": { down: "Wq", left: "Vp", right: "Vr", up: "Uq" }, "Vr": { down: "Wr", left: "Vq", right: "Vs", up: "Ur" }, "Vs": { down: "Ws", left: "Vr", right: "Vt", up: "Us" }, "Vt": { down: "Wt", left: "Vs", right: "Vu", up: "Ut" }, "Vu": { down: "Wu", left: "Vt", right: "Vv", up: "Uu" }, "Vv": { down: "Wv", left: "Vu", right: "Vw", up: "Uv" }, "Vw": { down: "Ww", left: "Vv", right: "Vx", up: "Uw" }, "Vx": { down: "Wx", left: "Vw", right: "Vy", up: "Ux" }, "Vy": { down: "Wy", left: "Vx", right: "Vz", up: "Uy" }, "Vz": { down: "Wz", left: "Vy", right: null, up: "Uz" }, "Wa": { down: "Xa", left: null, right: "Wb", up: "Va" }, "Wb": { down: "Xb", left: "Wa", right: "Wc", up: "Vb" }, "Wc": { down: "Xc", left: "Wb", right: "Wd", up: "Vc" }, "Wd": { down: "Xd", left: "Wc", right: "We", up: "Vd" }, "We": { down: "Xe", left: "Wd", right: "Wf", up: "Ve" }, "Wf": { down: "Xf", left: "We", right: "Wg", up: "Vf" }, "Wg": { down: "Xg", left: "Wf", right: "Wh", up: "Vg" }, "Wh": { down: "Xh", left: "Wg", right: "Wi", up: "Vh" }, "Wi": { down: "Xi", left: "Wh", right: "Wj", up: "Vi" }, "Wj": { down: "Xj", left: "Wi", right: "Wk", up: "Vj" }, "Wk": { down: "Xk", left: "Wj", right: "Wl", up: "Vk" }, "Wl": { down: "Xl", left: "Wk", right: "Wm", up: "Vl" }, "Wm": { down: "Xm", left: "Wl", right: "Wn", up: "Vm" }, "Wn": { down: "Xn", left: "Wm", right: "Wo", up: "Vn" }, "Wo": { down: "Xo", left: "Wn", right: "Wp", up: "Vo" }, "Wp": { down: "Xp", left: "Wo", right: "Wq", up: "Vp" }, "Wq": { down: "Xq", left: "Wp", right: "Wr", up: "Vq" }, "Wr": { down: "Xr", left: "Wq", right: "Ws", up: "Vr" }, "Ws": { down: "Xs", left: "Wr", right: "Wt", up: "Vs" }, "Wt": { down: "Xt", left: "Ws", right: "Wu", up: "Vt" }, "Wu": { down: "Xu", left: "Wt", right: "Wv", up: "Vu" }, "Wv": { down: "Xv", left: "Wu", right: "Ww", up: "Vv" }, "Ww": { down: "Xw", left: "Wv", right: "Wx", up: "Vw" }, "Wx": { down: "Xx", left: "Ww", right: "Wy", up: "Vx" }, "Wy": { down: "Xy", left: "Wx", right: "Wz", up: "Vy" }, "Wz": { down: "Xz", left: "Wy", right: null, up: "Vz" }, "Xa": { down: "Ya", left: null, right: "Xb", up: "Wa" }, "Xb": { down: "Yb", left: "Xa", right: "Xc", up: "Wb" }, "Xc": { down: "Yc", left: "Xb", right: "Xd", up: "Wc" }, "Xd": { down: "Yd", left: "Xc", right: "Xe", up: "Wd" }, "Xe": { down: "Ye", left: "Xd", right: "Xf", up: "We" }, "Xf": { down: "Yf", left: "Xe", right: "Xg", up: "Wf" }, "Xg": { down: "Yg", left: "Xf", right: "Xh", up: "Wg" }, "Xh": { down: "Yh", left: "Xg", right: "Xi", up: "Wh" }, "Xi": { down: "Yi", left: "Xh", right: "Xj", up: "Wi" }, "Xj": { down: "Yj", left: "Xi", right: "Xk", up: "Wj" }, "Xk": { down: "Yk", left: "Xj", right: "Xl", up: "Wk" }, "Xl": { down: "Yl", left: "Xk", right: "Xm", up: "Wl" }, "Xm": { down: "Ym", left: "Xl", right: "Xn", up: "Wm" }, "Xn": { down: "Yn", left: "Xm", right: "Xo", up: "Wn" }, "Xo": { down: "Yo", left: "Xn", right: "Xp", up: "Wo" }, "Xp": { down: "Yp", left: "Xo", right: "Xq", up: "Wp" }, "Xq": { down: "Yq", left: "Xp", right: "Xr", up: "Wq" }, "Xr": { down: "Yr", left: "Xq", right: "Xs", up: "Wr" }, "Xs": { down: "Ys", left: "Xr", right: "Xt", up: "Ws" }, "Xt": { down: "Yt", left: "Xs", right: "Xu", up: "Wt" }, "Xu": { down: "Yu", left: "Xt", right: "Xv", up: "Wu" }, "Xv": { down: "Yv", left: "Xu", right: "Xw", up: "Wv" }, "Xw": { down: "Yw", left: "Xv", right: "Xx", up: "Ww" }, "Xx": { down: "Yx", left: "Xw", right: "Xy", up: "Wx" }, "Xy": { down: "Yy", left: "Xx", right: "Xz", up: "Wy" }, "Xz": { down: "Yz", left: "Xy", right: null, up: "Wz" }, "Ya": { down: "Za", left: null, right: "Yb", up: "Xa" }, "Yb": { down: "Zb", left: "Ya", right: "Yc", up: "Xb" }, "Yc": { down: "Zc", left: "Yb", right: "Yd", up: "Xc" }, "Yd": { down: "Zd", left: "Yc", right: "Ye", up: "Xd" }, "Ye": { down: "Ze", left: "Yd", right: "Yf", up: "Xe" }, "Yf": { down: "Zf", left: "Ye", right: "Yg", up: "Xf" }, "Yg": { down: "Zg", left: "Yf", right: "Yh", up: "Xg" }, "Yh": { down: "Zh", left: "Yg", right: "Yi", up: "Xh" }, "Yi": { down: "Zi", left: "Yh", right: "Yj", up: "Xi" }, "Yj": { down: "Zj", left: "Yi", right: "Yk", up: "Xj" }, "Yk": { down: "Zk", left: "Yj", right: "Yl", up: "Xk" }, "Yl": { down: "Zl", left: "Yk", right: "Ym", up: "Xl" }, "Ym": { down: "Zm", left: "Yl", right: "Yn", up: "Xm" }, "Yn": { down: "Zn", left: "Ym", right: "Yo", up: "Xn" }, "Yo": { down: "Zo", left: "Yn", right: "Yp", up: "Xo" }, "Yp": { down: "Zp", left: "Yo", right: "Yq", up: "Xp" }, "Yq": { down: "Zq", left: "Yp", right: "Yr", up: "Xq" }, "Yr": { down: "Zr", left: "Yq", right: "Ys", up: "Xr" }, "Ys": { down: "Zs", left: "Yr", right: "Yt", up: "Xs" }, "Yt": { down: "Zt", left: "Ys", right: "Yu", up: "Xt" }, "Yu": { down: "Zu", left: "Yt", right: "Yv", up: "Xu" }, "Yv": { down: "Zv", left: "Yu", right: "Yw", up: "Xv" }, "Yw": { down: "Zw", left: "Yv", right: "Yx", up: "Xw" }, "Yx": { down: "Zx", left: "Yw", right: "Yy", up: "Xx" }, "Yy": { down: "Zy", left: "Yx", right: "Yz", up: "Xy" }, "Yz": { down: "Zz", left: "Yy", right: null, up: "Xz" }, "Za": { down: null, left: null, right: "Zb", up: "Ya" }, "Zb": { down: null, left: "Za", right: "Zc", up: "Yb" }, "Zc": { down: null, left: "Zb", right: "Zd", up: "Yc" }, "Zd": { down: null, left: "Zc", right: "Ze", up: "Yd" }, "Ze": { down: null, left: "Zd", right: "Zf", up: "Ye" }, "Zf": { down: null, left: "Ze", right: "Zg", up: "Yf" }, "Zg": { down: null, left: "Zf", right: "Zh", up: "Yg" }, "Zh": { down: null, left: "Zg", right: "Zi", up: "Yh" }, "Zi": { down: null, left: "Zh", right: "Zj", up: "Yi" }, "Zj": { down: null, left: "Zi", right: "Zk", up: "Yj" }, "Zk": { down: null, left: "Zj", right: "Zl", up: "Yk" }, "Zl": { down: null, left: "Zk", right: "Zm", up: "Yl" }, "Zm": { down: null, left: "Zl", right: "Zn", up: "Ym" }, "Zn": { down: null, left: "Zm", right: "Zo", up: "Yn" }, "Zo": { down: null, left: "Zn", right: "Zp", up: "Yo" }, "Zp": { down: null, left: "Zo", right: "Zq", up: "Yp" }, "Zq": { down: null, left: "Zp", right: "Zr", up: "Yq" }, "Zr": { down: null, left: "Zq", right: "Zs", up: "Yr" }, "Zs": { down: null, left: "Zr", right: "Zt", up: "Ys" }, "Zt": { down: null, left: "Zs", right: "Zu", up: "Yt" }, "Zu": { down: null, left: "Zt", right: "Zv", up: "Yu" }, "Zv": { down: null, left: "Zu", right: "Zw", up: "Yv" }, "Zw": { down: null, left: "Zv", right: "Zx", up: "Yw" }, "Zx": { down: null, left: "Zw", right: "Zy", up: "Yx" }, "Zy": { down: null, left: "Zx", right: "Zz", up: "Yy" }, "Zz": { down: null, left: "Zy", right: null, up: "Yz" } };
    return dictionary;
}

function getCellValue(game, cell) {
    if (cell == "Aa") { return game.Maze.Aa; }
    if (cell == "Ab") { return game.Maze.Ab; }
    if (cell == "Ac") { return game.Maze.Ac; }
    if (cell == "Ad") { return game.Maze.Ad; }
    if (cell == "Ae") { return game.Maze.Ae; }
    if (cell == "Af") { return game.Maze.Af; }
    if (cell == "Ag") { return game.Maze.Ag; }
    if (cell == "Ah") { return game.Maze.Ah; }
    if (cell == "Ai") { return game.Maze.Ai; }
    if (cell == "Aj") { return game.Maze.Aj; }
    if (cell == "Ak") { return game.Maze.Ak; }
    if (cell == "Al") { return game.Maze.Al; }
    if (cell == "Am") { return game.Maze.Am; }
    if (cell == "An") { return game.Maze.An; }
    if (cell == "Ao") { return game.Maze.Ao; }
    if (cell == "Ap") { return game.Maze.Ap; }
    if (cell == "Aq") { return game.Maze.Aq; }
    if (cell == "Ar") { return game.Maze.Ar; }
    if (cell == "As") { return game.Maze.As; }
    if (cell == "At") { return game.Maze.At; }
    if (cell == "Au") { return game.Maze.Au; }
    if (cell == "Av") { return game.Maze.Av; }
    if (cell == "Aw") { return game.Maze.Aw; }
    if (cell == "Ax") { return game.Maze.Ax; }
    if (cell == "Ay") { return game.Maze.Ay; }
    if (cell == "Az") { return game.Maze.Az; }
    if (cell == "Ba") { return game.Maze.Ba; }
    if (cell == "Bb") { return game.Maze.Bb; }
    if (cell == "Bc") { return game.Maze.Bc; }
    if (cell == "Bd") { return game.Maze.Bd; }
    if (cell == "Be") { return game.Maze.Be; }
    if (cell == "Bf") { return game.Maze.Bf; }
    if (cell == "Bg") { return game.Maze.Bg; }
    if (cell == "Bh") { return game.Maze.Bh; }
    if (cell == "Bi") { return game.Maze.Bi; }
    if (cell == "Bj") { return game.Maze.Bj; }
    if (cell == "Bk") { return game.Maze.Bk; }
    if (cell == "Bl") { return game.Maze.Bl; }
    if (cell == "Bm") { return game.Maze.Bm; }
    if (cell == "Bn") { return game.Maze.Bn; }
    if (cell == "Bo") { return game.Maze.Bo; }
    if (cell == "Bp") { return game.Maze.Bp; }
    if (cell == "Bq") { return game.Maze.Bq; }
    if (cell == "Br") { return game.Maze.Br; }
    if (cell == "Bs") { return game.Maze.Bs; }
    if (cell == "Bt") { return game.Maze.Bt; }
    if (cell == "Bu") { return game.Maze.Bu; }
    if (cell == "Bv") { return game.Maze.Bv; }
    if (cell == "Bw") { return game.Maze.Bw; }
    if (cell == "Bx") { return game.Maze.Bx; }
    if (cell == "By") { return game.Maze.By; }
    if (cell == "Bz") { return game.Maze.Bz; }
    if (cell == "Ca") { return game.Maze.Ca; }
    if (cell == "Cb") { return game.Maze.Cb; }
    if (cell == "Cc") { return game.Maze.Cc; }
    if (cell == "Cd") { return game.Maze.Cd; }
    if (cell == "Ce") { return game.Maze.Ce; }
    if (cell == "Cf") { return game.Maze.Cf; }
    if (cell == "Cg") { return game.Maze.Cg; }
    if (cell == "Ch") { return game.Maze.Ch; }
    if (cell == "Ci") { return game.Maze.Ci; }
    if (cell == "Cj") { return game.Maze.Cj; }
    if (cell == "Ck") { return game.Maze.Ck; }
    if (cell == "Cl") { return game.Maze.Cl; }
    if (cell == "Cm") { return game.Maze.Cm; }
    if (cell == "Cn") { return game.Maze.Cn; }
    if (cell == "Co") { return game.Maze.Co; }
    if (cell == "Cp") { return game.Maze.Cp; }
    if (cell == "Cq") { return game.Maze.Cq; }
    if (cell == "Cr") { return game.Maze.Cr; }
    if (cell == "Cs") { return game.Maze.Cs; }
    if (cell == "Ct") { return game.Maze.Ct; }
    if (cell == "Cu") { return game.Maze.Cu; }
    if (cell == "Cv") { return game.Maze.Cv; }
    if (cell == "Cw") { return game.Maze.Cw; }
    if (cell == "Cx") { return game.Maze.Cx; }
    if (cell == "Cy") { return game.Maze.Cy; }
    if (cell == "Cz") { return game.Maze.Cz; }
    if (cell == "Da") { return game.Maze.Da; }
    if (cell == "Db") { return game.Maze.Db; }
    if (cell == "Dc") { return game.Maze.Dc; }
    if (cell == "Dd") { return game.Maze.Dd; }
    if (cell == "De") { return game.Maze.De; }
    if (cell == "Df") { return game.Maze.Df; }
    if (cell == "Dg") { return game.Maze.Dg; }
    if (cell == "Dh") { return game.Maze.Dh; }
    if (cell == "Di") { return game.Maze.Di; }
    if (cell == "Dj") { return game.Maze.Dj; }
    if (cell == "Dk") { return game.Maze.Dk; }
    if (cell == "Dl") { return game.Maze.Dl; }
    if (cell == "Dm") { return game.Maze.Dm; }
    if (cell == "Dn") { return game.Maze.Dn; }
    if (cell == "Do") { return game.Maze.Do; }
    if (cell == "Dp") { return game.Maze.Dp; }
    if (cell == "Dq") { return game.Maze.Dq; }
    if (cell == "Dr") { return game.Maze.Dr; }
    if (cell == "Ds") { return game.Maze.Ds; }
    if (cell == "Dt") { return game.Maze.Dt; }
    if (cell == "Du") { return game.Maze.Du; }
    if (cell == "Dv") { return game.Maze.Dv; }
    if (cell == "Dw") { return game.Maze.Dw; }
    if (cell == "Dx") { return game.Maze.Dx; }
    if (cell == "Dy") { return game.Maze.Dy; }
    if (cell == "Dz") { return game.Maze.Dz; }
    if (cell == "Ea") { return game.Maze.Ea; }
    if (cell == "Eb") { return game.Maze.Eb; }
    if (cell == "Ec") { return game.Maze.Ec; }
    if (cell == "Ed") { return game.Maze.Ed; }
    if (cell == "Ee") { return game.Maze.Ee; }
    if (cell == "Ef") { return game.Maze.Ef; }
    if (cell == "Eg") { return game.Maze.Eg; }
    if (cell == "Eh") { return game.Maze.Eh; }
    if (cell == "Ei") { return game.Maze.Ei; }
    if (cell == "Ej") { return game.Maze.Ej; }
    if (cell == "Ek") { return game.Maze.Ek; }
    if (cell == "El") { return game.Maze.El; }
    if (cell == "Em") { return game.Maze.Em; }
    if (cell == "En") { return game.Maze.En; }
    if (cell == "Eo") { return game.Maze.Eo; }
    if (cell == "Ep") { return game.Maze.Ep; }
    if (cell == "Eq") { return game.Maze.Eq; }
    if (cell == "Er") { return game.Maze.Er; }
    if (cell == "Es") { return game.Maze.Es; }
    if (cell == "Et") { return game.Maze.Et; }
    if (cell == "Eu") { return game.Maze.Eu; }
    if (cell == "Ev") { return game.Maze.Ev; }
    if (cell == "Ew") { return game.Maze.Ew; }
    if (cell == "Ex") { return game.Maze.Ex; }
    if (cell == "Ey") { return game.Maze.Ey; }
    if (cell == "Ez") { return game.Maze.Ez; }
    if (cell == "Fa") { return game.Maze.Fa; }
    if (cell == "Fb") { return game.Maze.Fb; }
    if (cell == "Fc") { return game.Maze.Fc; }
    if (cell == "Fd") { return game.Maze.Fd; }
    if (cell == "Fe") { return game.Maze.Fe; }
    if (cell == "Ff") { return game.Maze.Ff; }
    if (cell == "Fg") { return game.Maze.Fg; }
    if (cell == "Fh") { return game.Maze.Fh; }
    if (cell == "Fi") { return game.Maze.Fi; }
    if (cell == "Fj") { return game.Maze.Fj; }
    if (cell == "Fk") { return game.Maze.Fk; }
    if (cell == "Fl") { return game.Maze.Fl; }
    if (cell == "Fm") { return game.Maze.Fm; }
    if (cell == "Fn") { return game.Maze.Fn; }
    if (cell == "Fo") { return game.Maze.Fo; }
    if (cell == "Fp") { return game.Maze.Fp; }
    if (cell == "Fq") { return game.Maze.Fq; }
    if (cell == "Fr") { return game.Maze.Fr; }
    if (cell == "Fs") { return game.Maze.Fs; }
    if (cell == "Ft") { return game.Maze.Ft; }
    if (cell == "Fu") { return game.Maze.Fu; }
    if (cell == "Fv") { return game.Maze.Fv; }
    if (cell == "Fw") { return game.Maze.Fw; }
    if (cell == "Fx") { return game.Maze.Fx; }
    if (cell == "Fy") { return game.Maze.Fy; }
    if (cell == "Fz") { return game.Maze.Fz; }
    if (cell == "Ga") { return game.Maze.Ga; }
    if (cell == "Gb") { return game.Maze.Gb; }
    if (cell == "Gc") { return game.Maze.Gc; }
    if (cell == "Gd") { return game.Maze.Gd; }
    if (cell == "Ge") { return game.Maze.Ge; }
    if (cell == "Gf") { return game.Maze.Gf; }
    if (cell == "Gg") { return game.Maze.Gg; }
    if (cell == "Gh") { return game.Maze.Gh; }
    if (cell == "Gi") { return game.Maze.Gi; }
    if (cell == "Gj") { return game.Maze.Gj; }
    if (cell == "Gk") { return game.Maze.Gk; }
    if (cell == "Gl") { return game.Maze.Gl; }
    if (cell == "Gm") { return game.Maze.Gm; }
    if (cell == "Gn") { return game.Maze.Gn; }
    if (cell == "Go") { return game.Maze.Go; }
    if (cell == "Gp") { return game.Maze.Gp; }
    if (cell == "Gq") { return game.Maze.Gq; }
    if (cell == "Gr") { return game.Maze.Gr; }
    if (cell == "Gs") { return game.Maze.Gs; }
    if (cell == "Gt") { return game.Maze.Gt; }
    if (cell == "Gu") { return game.Maze.Gu; }
    if (cell == "Gv") { return game.Maze.Gv; }
    if (cell == "Gw") { return game.Maze.Gw; }
    if (cell == "Gx") { return game.Maze.Gx; }
    if (cell == "Gy") { return game.Maze.Gy; }
    if (cell == "Gz") { return game.Maze.Gz; }
    if (cell == "Ha") { return game.Maze.Ha; }
    if (cell == "Hb") { return game.Maze.Hb; }
    if (cell == "Hc") { return game.Maze.Hc; }
    if (cell == "Hd") { return game.Maze.Hd; }
    if (cell == "He") { return game.Maze.He; }
    if (cell == "Hf") { return game.Maze.Hf; }
    if (cell == "Hg") { return game.Maze.Hg; }
    if (cell == "Hh") { return game.Maze.Hh; }
    if (cell == "Hi") { return game.Maze.Hi; }
    if (cell == "Hj") { return game.Maze.Hj; }
    if (cell == "Hk") { return game.Maze.Hk; }
    if (cell == "Hl") { return game.Maze.Hl; }
    if (cell == "Hm") { return game.Maze.Hm; }
    if (cell == "Hn") { return game.Maze.Hn; }
    if (cell == "Ho") { return game.Maze.Ho; }
    if (cell == "Hp") { return game.Maze.Hp; }
    if (cell == "Hq") { return game.Maze.Hq; }
    if (cell == "Hr") { return game.Maze.Hr; }
    if (cell == "Hs") { return game.Maze.Hs; }
    if (cell == "Ht") { return game.Maze.Ht; }
    if (cell == "Hu") { return game.Maze.Hu; }
    if (cell == "Hv") { return game.Maze.Hv; }
    if (cell == "Hw") { return game.Maze.Hw; }
    if (cell == "Hx") { return game.Maze.Hx; }
    if (cell == "Hy") { return game.Maze.Hy; }
    if (cell == "Hz") { return game.Maze.Hz; }
    if (cell == "Ia") { return game.Maze.Ia; }
    if (cell == "Ib") { return game.Maze.Ib; }
    if (cell == "Ic") { return game.Maze.Ic; }
    if (cell == "Id") { return game.Maze.Id; }
    if (cell == "Ie") { return game.Maze.Ie; }
    if (cell == "If") { return game.Maze.If; }
    if (cell == "Ig") { return game.Maze.Ig; }
    if (cell == "Ih") { return game.Maze.Ih; }
    if (cell == "Ii") { return game.Maze.Ii; }
    if (cell == "Ij") { return game.Maze.Ij; }
    if (cell == "Ik") { return game.Maze.Ik; }
    if (cell == "Il") { return game.Maze.Il; }
    if (cell == "Im") { return game.Maze.Im; }
    if (cell == "In") { return game.Maze.In; }
    if (cell == "Io") { return game.Maze.Io; }
    if (cell == "Ip") { return game.Maze.Ip; }
    if (cell == "Iq") { return game.Maze.Iq; }
    if (cell == "Ir") { return game.Maze.Ir; }
    if (cell == "Is") { return game.Maze.Is; }
    if (cell == "It") { return game.Maze.It; }
    if (cell == "Iu") { return game.Maze.Iu; }
    if (cell == "Iv") { return game.Maze.Iv; }
    if (cell == "Iw") { return game.Maze.Iw; }
    if (cell == "Ix") { return game.Maze.Ix; }
    if (cell == "Iy") { return game.Maze.Iy; }
    if (cell == "Iz") { return game.Maze.Iz; }
    if (cell == "Ja") { return game.Maze.Ja; }
    if (cell == "Jb") { return game.Maze.Jb; }
    if (cell == "Jc") { return game.Maze.Jc; }
    if (cell == "Jd") { return game.Maze.Jd; }
    if (cell == "Je") { return game.Maze.Je; }
    if (cell == "Jf") { return game.Maze.Jf; }
    if (cell == "Jg") { return game.Maze.Jg; }
    if (cell == "Jh") { return game.Maze.Jh; }
    if (cell == "Ji") { return game.Maze.Ji; }
    if (cell == "Jj") { return game.Maze.Jj; }
    if (cell == "Jk") { return game.Maze.Jk; }
    if (cell == "Jl") { return game.Maze.Jl; }
    if (cell == "Jm") { return game.Maze.Jm; }
    if (cell == "Jn") { return game.Maze.Jn; }
    if (cell == "Jo") { return game.Maze.Jo; }
    if (cell == "Jp") { return game.Maze.Jp; }
    if (cell == "Jq") { return game.Maze.Jq; }
    if (cell == "Jr") { return game.Maze.Jr; }
    if (cell == "Js") { return game.Maze.Js; }
    if (cell == "Jt") { return game.Maze.Jt; }
    if (cell == "Ju") { return game.Maze.Ju; }
    if (cell == "Jv") { return game.Maze.Jv; }
    if (cell == "Jw") { return game.Maze.Jw; }
    if (cell == "Jx") { return game.Maze.Jx; }
    if (cell == "Jy") { return game.Maze.Jy; }
    if (cell == "Jz") { return game.Maze.Jz; }
    if (cell == "Ka") { return game.Maze.Ka; }
    if (cell == "Kb") { return game.Maze.Kb; }
    if (cell == "Kc") { return game.Maze.Kc; }
    if (cell == "Kd") { return game.Maze.Kd; }
    if (cell == "Ke") { return game.Maze.Ke; }
    if (cell == "Kf") { return game.Maze.Kf; }
    if (cell == "Kg") { return game.Maze.Kg; }
    if (cell == "Kh") { return game.Maze.Kh; }
    if (cell == "Ki") { return game.Maze.Ki; }
    if (cell == "Kj") { return game.Maze.Kj; }
    if (cell == "Kk") { return game.Maze.Kk; }
    if (cell == "Kl") { return game.Maze.Kl; }
    if (cell == "Km") { return game.Maze.Km; }
    if (cell == "Kn") { return game.Maze.Kn; }
    if (cell == "Ko") { return game.Maze.Ko; }
    if (cell == "Kp") { return game.Maze.Kp; }
    if (cell == "Kq") { return game.Maze.Kq; }
    if (cell == "Kr") { return game.Maze.Kr; }
    if (cell == "Ks") { return game.Maze.Ks; }
    if (cell == "Kt") { return game.Maze.Kt; }
    if (cell == "Ku") { return game.Maze.Ku; }
    if (cell == "Kv") { return game.Maze.Kv; }
    if (cell == "Kw") { return game.Maze.Kw; }
    if (cell == "Kx") { return game.Maze.Kx; }
    if (cell == "Ky") { return game.Maze.Ky; }
    if (cell == "Kz") { return game.Maze.Kz; }
    if (cell == "La") { return game.Maze.La; }
    if (cell == "Lb") { return game.Maze.Lb; }
    if (cell == "Lc") { return game.Maze.Lc; }
    if (cell == "Ld") { return game.Maze.Ld; }
    if (cell == "Le") { return game.Maze.Le; }
    if (cell == "Lf") { return game.Maze.Lf; }
    if (cell == "Lg") { return game.Maze.Lg; }
    if (cell == "Lh") { return game.Maze.Lh; }
    if (cell == "Li") { return game.Maze.Li; }
    if (cell == "Lj") { return game.Maze.Lj; }
    if (cell == "Lk") { return game.Maze.Lk; }
    if (cell == "Ll") { return game.Maze.Ll; }
    if (cell == "Lm") { return game.Maze.Lm; }
    if (cell == "Ln") { return game.Maze.Ln; }
    if (cell == "Lo") { return game.Maze.Lo; }
    if (cell == "Lp") { return game.Maze.Lp; }
    if (cell == "Lq") { return game.Maze.Lq; }
    if (cell == "Lr") { return game.Maze.Lr; }
    if (cell == "Ls") { return game.Maze.Ls; }
    if (cell == "Lt") { return game.Maze.Lt; }
    if (cell == "Lu") { return game.Maze.Lu; }
    if (cell == "Lv") { return game.Maze.Lv; }
    if (cell == "Lw") { return game.Maze.Lw; }
    if (cell == "Lx") { return game.Maze.Lx; }
    if (cell == "Ly") { return game.Maze.Ly; }
    if (cell == "Lz") { return game.Maze.Lz; }
    if (cell == "Ma") { return game.Maze.Ma; }
    if (cell == "Mb") { return game.Maze.Mb; }
    if (cell == "Mc") { return game.Maze.Mc; }
    if (cell == "Md") { return game.Maze.Md; }
    if (cell == "Me") { return game.Maze.Me; }
    if (cell == "Mf") { return game.Maze.Mf; }
    if (cell == "Mg") { return game.Maze.Mg; }
    if (cell == "Mh") { return game.Maze.Mh; }
    if (cell == "Mi") { return game.Maze.Mi; }
    if (cell == "Mj") { return game.Maze.Mj; }
    if (cell == "Mk") { return game.Maze.Mk; }
    if (cell == "Ml") { return game.Maze.Ml; }
    if (cell == "Mm") { return game.Maze.Mm; }
    if (cell == "Mn") { return game.Maze.Mn; }
    if (cell == "Mo") { return game.Maze.Mo; }
    if (cell == "Mp") { return game.Maze.Mp; }
    if (cell == "Mq") { return game.Maze.Mq; }
    if (cell == "Mr") { return game.Maze.Mr; }
    if (cell == "Ms") { return game.Maze.Ms; }
    if (cell == "Mt") { return game.Maze.Mt; }
    if (cell == "Mu") { return game.Maze.Mu; }
    if (cell == "Mv") { return game.Maze.Mv; }
    if (cell == "Mw") { return game.Maze.Mw; }
    if (cell == "Mx") { return game.Maze.Mx; }
    if (cell == "My") { return game.Maze.My; }
    if (cell == "Mz") { return game.Maze.Mz; }
    if (cell == "Na") { return game.Maze.Na; }
    if (cell == "Nb") { return game.Maze.Nb; }
    if (cell == "Nc") { return game.Maze.Nc; }
    if (cell == "Nd") { return game.Maze.Nd; }
    if (cell == "Ne") { return game.Maze.Ne; }
    if (cell == "Nf") { return game.Maze.Nf; }
    if (cell == "Ng") { return game.Maze.Ng; }
    if (cell == "Nh") { return game.Maze.Nh; }
    if (cell == "Ni") { return game.Maze.Ni; }
    if (cell == "Nj") { return game.Maze.Nj; }
    if (cell == "Nk") { return game.Maze.Nk; }
    if (cell == "Nl") { return game.Maze.Nl; }
    if (cell == "Nm") { return game.Maze.Nm; }
    if (cell == "Nn") { return game.Maze.Nn; }
    if (cell == "No") { return game.Maze.No; }
    if (cell == "Np") { return game.Maze.Np; }
    if (cell == "Nq") { return game.Maze.Nq; }
    if (cell == "Nr") { return game.Maze.Nr; }
    if (cell == "Ns") { return game.Maze.Ns; }
    if (cell == "Nt") { return game.Maze.Nt; }
    if (cell == "Nu") { return game.Maze.Nu; }
    if (cell == "Nv") { return game.Maze.Nv; }
    if (cell == "Nw") { return game.Maze.Nw; }
    if (cell == "Nx") { return game.Maze.Nx; }
    if (cell == "Ny") { return game.Maze.Ny; }
    if (cell == "Nz") { return game.Maze.Nz; }
    if (cell == "Oa") { return game.Maze.Oa; }
    if (cell == "Ob") { return game.Maze.Ob; }
    if (cell == "Oc") { return game.Maze.Oc; }
    if (cell == "Od") { return game.Maze.Od; }
    if (cell == "Oe") { return game.Maze.Oe; }
    if (cell == "Of") { return game.Maze.Of; }
    if (cell == "Og") { return game.Maze.Og; }
    if (cell == "Oh") { return game.Maze.Oh; }
    if (cell == "Oi") { return game.Maze.Oi; }
    if (cell == "Oj") { return game.Maze.Oj; }
    if (cell == "Ok") { return game.Maze.Ok; }
    if (cell == "Ol") { return game.Maze.Ol; }
    if (cell == "Om") { return game.Maze.Om; }
    if (cell == "On") { return game.Maze.On; }
    if (cell == "Oo") { return game.Maze.Oo; }
    if (cell == "Op") { return game.Maze.Op; }
    if (cell == "Oq") { return game.Maze.Oq; }
    if (cell == "Or") { return game.Maze.Or; }
    if (cell == "Os") { return game.Maze.Os; }
    if (cell == "Ot") { return game.Maze.Ot; }
    if (cell == "Ou") { return game.Maze.Ou; }
    if (cell == "Ov") { return game.Maze.Ov; }
    if (cell == "Ow") { return game.Maze.Ow; }
    if (cell == "Ox") { return game.Maze.Ox; }
    if (cell == "Oy") { return game.Maze.Oy; }
    if (cell == "Oz") { return game.Maze.Oz; }
    if (cell == "Pa") { return game.Maze.Pa; }
    if (cell == "Pb") { return game.Maze.Pb; }
    if (cell == "Pc") { return game.Maze.Pc; }
    if (cell == "Pd") { return game.Maze.Pd; }
    if (cell == "Pe") { return game.Maze.Pe; }
    if (cell == "Pf") { return game.Maze.Pf; }
    if (cell == "Pg") { return game.Maze.Pg; }
    if (cell == "Ph") { return game.Maze.Ph; }
    if (cell == "Pi") { return game.Maze.Pi; }
    if (cell == "Pj") { return game.Maze.Pj; }
    if (cell == "Pk") { return game.Maze.Pk; }
    if (cell == "Pl") { return game.Maze.Pl; }
    if (cell == "Pm") { return game.Maze.Pm; }
    if (cell == "Pn") { return game.Maze.Pn; }
    if (cell == "Po") { return game.Maze.Po; }
    if (cell == "Pp") { return game.Maze.Pp; }
    if (cell == "Pq") { return game.Maze.Pq; }
    if (cell == "Pr") { return game.Maze.Pr; }
    if (cell == "Ps") { return game.Maze.Ps; }
    if (cell == "Pt") { return game.Maze.Pt; }
    if (cell == "Pu") { return game.Maze.Pu; }
    if (cell == "Pv") { return game.Maze.Pv; }
    if (cell == "Pw") { return game.Maze.Pw; }
    if (cell == "Px") { return game.Maze.Px; }
    if (cell == "Py") { return game.Maze.Py; }
    if (cell == "Pz") { return game.Maze.Pz; }
    if (cell == "Qa") { return game.Maze.Qa; }
    if (cell == "Qb") { return game.Maze.Qb; }
    if (cell == "Qc") { return game.Maze.Qc; }
    if (cell == "Qd") { return game.Maze.Qd; }
    if (cell == "Qe") { return game.Maze.Qe; }
    if (cell == "Qf") { return game.Maze.Qf; }
    if (cell == "Qg") { return game.Maze.Qg; }
    if (cell == "Qh") { return game.Maze.Qh; }
    if (cell == "Qi") { return game.Maze.Qi; }
    if (cell == "Qj") { return game.Maze.Qj; }
    if (cell == "Qk") { return game.Maze.Qk; }
    if (cell == "Ql") { return game.Maze.Ql; }
    if (cell == "Qm") { return game.Maze.Qm; }
    if (cell == "Qn") { return game.Maze.Qn; }
    if (cell == "Qo") { return game.Maze.Qo; }
    if (cell == "Qp") { return game.Maze.Qp; }
    if (cell == "Qq") { return game.Maze.Qq; }
    if (cell == "Qr") { return game.Maze.Qr; }
    if (cell == "Qs") { return game.Maze.Qs; }
    if (cell == "Qt") { return game.Maze.Qt; }
    if (cell == "Qu") { return game.Maze.Qu; }
    if (cell == "Qv") { return game.Maze.Qv; }
    if (cell == "Qw") { return game.Maze.Qw; }
    if (cell == "Qx") { return game.Maze.Qx; }
    if (cell == "Qy") { return game.Maze.Qy; }
    if (cell == "Qz") { return game.Maze.Qz; }
    if (cell == "Ra") { return game.Maze.Ra; }
    if (cell == "Rb") { return game.Maze.Rb; }
    if (cell == "Rc") { return game.Maze.Rc; }
    if (cell == "Rd") { return game.Maze.Rd; }
    if (cell == "Re") { return game.Maze.Re; }
    if (cell == "Rf") { return game.Maze.Rf; }
    if (cell == "Rg") { return game.Maze.Rg; }
    if (cell == "Rh") { return game.Maze.Rh; }
    if (cell == "Ri") { return game.Maze.Ri; }
    if (cell == "Rj") { return game.Maze.Rj; }
    if (cell == "Rk") { return game.Maze.Rk; }
    if (cell == "Rl") { return game.Maze.Rl; }
    if (cell == "Rm") { return game.Maze.Rm; }
    if (cell == "Rn") { return game.Maze.Rn; }
    if (cell == "Ro") { return game.Maze.Ro; }
    if (cell == "Rp") { return game.Maze.Rp; }
    if (cell == "Rq") { return game.Maze.Rq; }
    if (cell == "Rr") { return game.Maze.Rr; }
    if (cell == "Rs") { return game.Maze.Rs; }
    if (cell == "Rt") { return game.Maze.Rt; }
    if (cell == "Ru") { return game.Maze.Ru; }
    if (cell == "Rv") { return game.Maze.Rv; }
    if (cell == "Rw") { return game.Maze.Rw; }
    if (cell == "Rx") { return game.Maze.Rx; }
    if (cell == "Ry") { return game.Maze.Ry; }
    if (cell == "Rz") { return game.Maze.Rz; }
    if (cell == "Sa") { return game.Maze.Sa; }
    if (cell == "Sb") { return game.Maze.Sb; }
    if (cell == "Sc") { return game.Maze.Sc; }
    if (cell == "Sd") { return game.Maze.Sd; }
    if (cell == "Se") { return game.Maze.Se; }
    if (cell == "Sf") { return game.Maze.Sf; }
    if (cell == "Sg") { return game.Maze.Sg; }
    if (cell == "Sh") { return game.Maze.Sh; }
    if (cell == "Si") { return game.Maze.Si; }
    if (cell == "Sj") { return game.Maze.Sj; }
    if (cell == "Sk") { return game.Maze.Sk; }
    if (cell == "Sl") { return game.Maze.Sl; }
    if (cell == "Sm") { return game.Maze.Sm; }
    if (cell == "Sn") { return game.Maze.Sn; }
    if (cell == "So") { return game.Maze.So; }
    if (cell == "Sp") { return game.Maze.Sp; }
    if (cell == "Sq") { return game.Maze.Sq; }
    if (cell == "Sr") { return game.Maze.Sr; }
    if (cell == "Ss") { return game.Maze.Ss; }
    if (cell == "St") { return game.Maze.St; }
    if (cell == "Su") { return game.Maze.Su; }
    if (cell == "Sv") { return game.Maze.Sv; }
    if (cell == "Sw") { return game.Maze.Sw; }
    if (cell == "Sx") { return game.Maze.Sx; }
    if (cell == "Sy") { return game.Maze.Sy; }
    if (cell == "Sz") { return game.Maze.Sz; }
    if (cell == "Ta") { return game.Maze.Ta; }
    if (cell == "Tb") { return game.Maze.Tb; }
    if (cell == "Tc") { return game.Maze.Tc; }
    if (cell == "Td") { return game.Maze.Td; }
    if (cell == "Te") { return game.Maze.Te; }
    if (cell == "Tf") { return game.Maze.Tf; }
    if (cell == "Tg") { return game.Maze.Tg; }
    if (cell == "Th") { return game.Maze.Th; }
    if (cell == "Ti") { return game.Maze.Ti; }
    if (cell == "Tj") { return game.Maze.Tj; }
    if (cell == "Tk") { return game.Maze.Tk; }
    if (cell == "Tl") { return game.Maze.Tl; }
    if (cell == "Tm") { return game.Maze.Tm; }
    if (cell == "Tn") { return game.Maze.Tn; }
    if (cell == "To") { return game.Maze.To; }
    if (cell == "Tp") { return game.Maze.Tp; }
    if (cell == "Tq") { return game.Maze.Tq; }
    if (cell == "Tr") { return game.Maze.Tr; }
    if (cell == "Ts") { return game.Maze.Ts; }
    if (cell == "Tt") { return game.Maze.Tt; }
    if (cell == "Tu") { return game.Maze.Tu; }
    if (cell == "Tv") { return game.Maze.Tv; }
    if (cell == "Tw") { return game.Maze.Tw; }
    if (cell == "Tx") { return game.Maze.Tx; }
    if (cell == "Ty") { return game.Maze.Ty; }
    if (cell == "Tz") { return game.Maze.Tz; }
    if (cell == "Ua") { return game.Maze.Ua; }
    if (cell == "Ub") { return game.Maze.Ub; }
    if (cell == "Uc") { return game.Maze.Uc; }
    if (cell == "Ud") { return game.Maze.Ud; }
    if (cell == "Ue") { return game.Maze.Ue; }
    if (cell == "Uf") { return game.Maze.Uf; }
    if (cell == "Ug") { return game.Maze.Ug; }
    if (cell == "Uh") { return game.Maze.Uh; }
    if (cell == "Ui") { return game.Maze.Ui; }
    if (cell == "Uj") { return game.Maze.Uj; }
    if (cell == "Uk") { return game.Maze.Uk; }
    if (cell == "Ul") { return game.Maze.Ul; }
    if (cell == "Um") { return game.Maze.Um; }
    if (cell == "Un") { return game.Maze.Un; }
    if (cell == "Uo") { return game.Maze.Uo; }
    if (cell == "Up") { return game.Maze.Up; }
    if (cell == "Uq") { return game.Maze.Uq; }
    if (cell == "Ur") { return game.Maze.Ur; }
    if (cell == "Us") { return game.Maze.Us; }
    if (cell == "Ut") { return game.Maze.Ut; }
    if (cell == "Uu") { return game.Maze.Uu; }
    if (cell == "Uv") { return game.Maze.Uv; }
    if (cell == "Uw") { return game.Maze.Uw; }
    if (cell == "Ux") { return game.Maze.Ux; }
    if (cell == "Uy") { return game.Maze.Uy; }
    if (cell == "Uz") { return game.Maze.Uz; }
    if (cell == "Va") { return game.Maze.Va; }
    if (cell == "Vb") { return game.Maze.Vb; }
    if (cell == "Vc") { return game.Maze.Vc; }
    if (cell == "Vd") { return game.Maze.Vd; }
    if (cell == "Ve") { return game.Maze.Ve; }
    if (cell == "Vf") { return game.Maze.Vf; }
    if (cell == "Vg") { return game.Maze.Vg; }
    if (cell == "Vh") { return game.Maze.Vh; }
    if (cell == "Vi") { return game.Maze.Vi; }
    if (cell == "Vj") { return game.Maze.Vj; }
    if (cell == "Vk") { return game.Maze.Vk; }
    if (cell == "Vl") { return game.Maze.Vl; }
    if (cell == "Vm") { return game.Maze.Vm; }
    if (cell == "Vn") { return game.Maze.Vn; }
    if (cell == "Vo") { return game.Maze.Vo; }
    if (cell == "Vp") { return game.Maze.Vp; }
    if (cell == "Vq") { return game.Maze.Vq; }
    if (cell == "Vr") { return game.Maze.Vr; }
    if (cell == "Vs") { return game.Maze.Vs; }
    if (cell == "Vt") { return game.Maze.Vt; }
    if (cell == "Vu") { return game.Maze.Vu; }
    if (cell == "Vv") { return game.Maze.Vv; }
    if (cell == "Vw") { return game.Maze.Vw; }
    if (cell == "Vx") { return game.Maze.Vx; }
    if (cell == "Vy") { return game.Maze.Vy; }
    if (cell == "Vz") { return game.Maze.Vz; }
    if (cell == "Wa") { return game.Maze.Wa; }
    if (cell == "Wb") { return game.Maze.Wb; }
    if (cell == "Wc") { return game.Maze.Wc; }
    if (cell == "Wd") { return game.Maze.Wd; }
    if (cell == "We") { return game.Maze.We; }
    if (cell == "Wf") { return game.Maze.Wf; }
    if (cell == "Wg") { return game.Maze.Wg; }
    if (cell == "Wh") { return game.Maze.Wh; }
    if (cell == "Wi") { return game.Maze.Wi; }
    if (cell == "Wj") { return game.Maze.Wj; }
    if (cell == "Wk") { return game.Maze.Wk; }
    if (cell == "Wl") { return game.Maze.Wl; }
    if (cell == "Wm") { return game.Maze.Wm; }
    if (cell == "Wn") { return game.Maze.Wn; }
    if (cell == "Wo") { return game.Maze.Wo; }
    if (cell == "Wp") { return game.Maze.Wp; }
    if (cell == "Wq") { return game.Maze.Wq; }
    if (cell == "Wr") { return game.Maze.Wr; }
    if (cell == "Ws") { return game.Maze.Ws; }
    if (cell == "Wt") { return game.Maze.Wt; }
    if (cell == "Wu") { return game.Maze.Wu; }
    if (cell == "Wv") { return game.Maze.Wv; }
    if (cell == "Ww") { return game.Maze.Ww; }
    if (cell == "Wx") { return game.Maze.Wx; }
    if (cell == "Wy") { return game.Maze.Wy; }
    if (cell == "Wz") { return game.Maze.Wz; }
    if (cell == "Xa") { return game.Maze.Xa; }
    if (cell == "Xb") { return game.Maze.Xb; }
    if (cell == "Xc") { return game.Maze.Xc; }
    if (cell == "Xd") { return game.Maze.Xd; }
    if (cell == "Xe") { return game.Maze.Xe; }
    if (cell == "Xf") { return game.Maze.Xf; }
    if (cell == "Xg") { return game.Maze.Xg; }
    if (cell == "Xh") { return game.Maze.Xh; }
    if (cell == "Xi") { return game.Maze.Xi; }
    if (cell == "Xj") { return game.Maze.Xj; }
    if (cell == "Xk") { return game.Maze.Xk; }
    if (cell == "Xl") { return game.Maze.Xl; }
    if (cell == "Xm") { return game.Maze.Xm; }
    if (cell == "Xn") { return game.Maze.Xn; }
    if (cell == "Xo") { return game.Maze.Xo; }
    if (cell == "Xp") { return game.Maze.Xp; }
    if (cell == "Xq") { return game.Maze.Xq; }
    if (cell == "Xr") { return game.Maze.Xr; }
    if (cell == "Xs") { return game.Maze.Xs; }
    if (cell == "Xt") { return game.Maze.Xt; }
    if (cell == "Xu") { return game.Maze.Xu; }
    if (cell == "Xv") { return game.Maze.Xv; }
    if (cell == "Xw") { return game.Maze.Xw; }
    if (cell == "Xx") { return game.Maze.Xx; }
    if (cell == "Xy") { return game.Maze.Xy; }
    if (cell == "Xz") { return game.Maze.Xz; }
    if (cell == "Ya") { return game.Maze.Ya; }
    if (cell == "Yb") { return game.Maze.Yb; }
    if (cell == "Yc") { return game.Maze.Yc; }
    if (cell == "Yd") { return game.Maze.Yd; }
    if (cell == "Ye") { return game.Maze.Ye; }
    if (cell == "Yf") { return game.Maze.Yf; }
    if (cell == "Yg") { return game.Maze.Yg; }
    if (cell == "Yh") { return game.Maze.Yh; }
    if (cell == "Yi") { return game.Maze.Yi; }
    if (cell == "Yj") { return game.Maze.Yj; }
    if (cell == "Yk") { return game.Maze.Yk; }
    if (cell == "Yl") { return game.Maze.Yl; }
    if (cell == "Ym") { return game.Maze.Ym; }
    if (cell == "Yn") { return game.Maze.Yn; }
    if (cell == "Yo") { return game.Maze.Yo; }
    if (cell == "Yp") { return game.Maze.Yp; }
    if (cell == "Yq") { return game.Maze.Yq; }
    if (cell == "Yr") { return game.Maze.Yr; }
    if (cell == "Ys") { return game.Maze.Ys; }
    if (cell == "Yt") { return game.Maze.Yt; }
    if (cell == "Yu") { return game.Maze.Yu; }
    if (cell == "Yv") { return game.Maze.Yv; }
    if (cell == "Yw") { return game.Maze.Yw; }
    if (cell == "Yx") { return game.Maze.Yx; }
    if (cell == "Yy") { return game.Maze.Yy; }
    if (cell == "Yz") { return game.Maze.Yz; }
    if (cell == "Za") { return game.Maze.Za; }
    if (cell == "Zb") { return game.Maze.Zb; }
    if (cell == "Zc") { return game.Maze.Zc; }
    if (cell == "Zd") { return game.Maze.Zd; }
    if (cell == "Ze") { return game.Maze.Ze; }
    if (cell == "Zf") { return game.Maze.Zf; }
    if (cell == "Zg") { return game.Maze.Zg; }
    if (cell == "Zh") { return game.Maze.Zh; }
    if (cell == "Zi") { return game.Maze.Zi; }
    if (cell == "Zj") { return game.Maze.Zj; }
    if (cell == "Zk") { return game.Maze.Zk; }
    if (cell == "Zl") { return game.Maze.Zl; }
    if (cell == "Zm") { return game.Maze.Zm; }
    if (cell == "Zn") { return game.Maze.Zn; }
    if (cell == "Zo") { return game.Maze.Zo; }
    if (cell == "Zp") { return game.Maze.Zp; }
    if (cell == "Zq") { return game.Maze.Zq; }
    if (cell == "Zr") { return game.Maze.Zr; }
    if (cell == "Zs") { return game.Maze.Zs; }
    if (cell == "Zt") { return game.Maze.Zt; }
    if (cell == "Zu") { return game.Maze.Zu; }
    if (cell == "Zv") { return game.Maze.Zv; }
    if (cell == "Zw") { return game.Maze.Zw; }
    if (cell == "Zx") { return game.Maze.Zx; }
    if (cell == "Zy") { return game.Maze.Zy; }
    if (cell == "Zz") { return game.Maze.Zz; }
    return null;
}