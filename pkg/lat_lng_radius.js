import * as wasm from './lat_lng_radius_bg.wasm';

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}
/**
* @param {number} lat
* @param {number} lng
* @param {number} rad
* @returns {Coords}
*/
export function within_radius(lat, lng, rad) {
    var ret = wasm.within_radius(lat, lng, rad);
    return Coords.__wrap(ret);
}

/**
*/
export class Coords {

    static __wrap(ptr) {
        const obj = Object.create(Coords.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_coords_free(ptr);
    }
    /**
    * @returns {Delta}
    */
    get lat() {
        var ret = wasm.__wbg_get_coords_lat(this.ptr);
        return Delta.__wrap(ret);
    }
    /**
    * @param {Delta} arg0
    */
    set lat(arg0) {
        _assertClass(arg0, Delta);
        var ptr0 = arg0.ptr;
        arg0.ptr = 0;
        wasm.__wbg_set_coords_lat(this.ptr, ptr0);
    }
    /**
    * @returns {Delta}
    */
    get lng() {
        var ret = wasm.__wbg_get_coords_lng(this.ptr);
        return Delta.__wrap(ret);
    }
    /**
    * @param {Delta} arg0
    */
    set lng(arg0) {
        _assertClass(arg0, Delta);
        var ptr0 = arg0.ptr;
        arg0.ptr = 0;
        wasm.__wbg_set_coords_lng(this.ptr, ptr0);
    }
}
/**
*/
export class Delta {

    static __wrap(ptr) {
        const obj = Object.create(Delta.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_delta_free(ptr);
    }
    /**
    * @returns {number}
    */
    get min() {
        var ret = wasm.__wbg_get_delta_min(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set min(arg0) {
        wasm.__wbg_set_delta_min(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get max() {
        var ret = wasm.__wbg_get_delta_max(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set max(arg0) {
        wasm.__wbg_set_delta_max(this.ptr, arg0);
    }
}

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

