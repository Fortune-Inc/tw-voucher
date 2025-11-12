import { FingerPrintMeNotClient } from 'fingerprint-me-not';

class RequestF {
    constructor() {
        this.session = new FingerPrintMeNotClient.Session({
            ja3String: "771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,43-17613-45-65281-23-35-5-27-11-18-10-51-13-65037-16-0-41,4588-29-23-24,0",
            h2Settings: { "HEADER_TABLE_SIZE": 65536, "ENABLE_PUSH": 0, "INITIAL_WINDOW_SIZE": 6291456, "MAX_HEADER_LIST_SIZE": 262144 },
            h2SettingsOrder: ["HEADER_TABLE_SIZE", "ENABLE_PUSH", "INITIAL_WINDOW_SIZE", "MAX_HEADER_LIST_SIZE"],
            supportedSignatureAlgorithms: ["ECDSAWithP256AndSHA256", "PSSWithSHA256", "PKCS1WithSHA256", "ECDSAWithP384AndSHA384", "PSSWithSHA384", "PKCS1WithSHA384", "PSSWithSHA512", "PKCS1WithSHA512"],
            supportedVersions: ["GREASE", "1.3", "1.2"],
            keyShareCurves: ["GREASE", "X25519MLKEM768", "X25519"],
            certCompressionAlgo: "brotli",
            pseudoHeaderOrder: [":method", ":authority", ":scheme", ":path"],
            connectionFlow: 15663105,
            headerOrder: ["cache-control", "sec-ch-ua", "sec-ch-ua-mobile", "sec-ch-ua-platform", "upgrade-insecure-requests", "user-agent", "accept", "sec-fetch-site", "sec-fetch-mode", "sec-fetch-user", "sec-fetch-dest", "accept-encoding", "accept-language", "priority"],
            clientIdentifier: "chrome_mobile_138",
            supportedDelegatedCredentialsAlgorithms: [],
            alpnProtocols: ["h2", "http/1.1"],
            ecPointFormats: ["0x00"],
            pskKeyExchangeModes: ["psk_dhe_ke"],
            statusRequest: { certificate_status_type: "OCSP", responder_id_list_length: 0, request_extensions_length: 0 },
        });
        this.session.headers = { "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36" }
    }
}

export default async (phone = "", voucherData = "") => {
    // Validate phone number
    phone = (phone + "").trim();
    if (!phone.length || phone.match(/\D/)) {
        throw Error("INVAILD_PHONE");
    }

    // Process voucher
    let parts = (voucherData + "").split("v=");
    let voucher = (parts[1] || parts[0]).match(/[0-9A-Za-z]+/)[0];

    if (voucher.length !== 35) {
        throw Error("INVAILD_VOUCHER");
    }

    let requestF = new RequestF();
    const payload = {
        mobile: phone,
        voucher_hash: voucher
    };

    // Make the API request
    let response = await requestF.session.post(
        `https://gift.truemoney.com/campaign/vouchers/${voucher}/redeem`,
        {
            json: payload
        }
    ).then(res => res.json);

    // Process the response
    if (response.status.code === "SUCCESS") {
        return {
            amount: Number(response.data.my_ticket.amount_baht.replace(/,/g, '')),
            owner_full_name: response.data.owner_profile.full_name,
            code: voucher
        };
    }

    throw Error(response.status.code);
};
