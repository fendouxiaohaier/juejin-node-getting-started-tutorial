const { exec } = require("child_process");

// 生成唯一ID的函数
function generateUniqueId() {
  return Date.now().toString() + Math.random().toString().slice(2, 8);
}

// 构造1000个商品数据
function generateItems(count) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push({
      skuId: generateUniqueId(),
      spuId: generateUniqueId(),
      upcCodes: [`2065${Math.floor(Math.random() * 10000)}`],
      spec: "200g",
      minPrice: 15,
      maxPrice: 110,
      rangePurchasePriceVo: null,
      suit: false,
      erpRelInfoList: [
        {
          erpCode: `2065${Math.floor(Math.random() * 10000)}`,
          erpUpc: `2065${Math.floor(Math.random() * 10000)}`,
        },
      ],
      spuId: generateUniqueId(),
      upc: `2065${Math.floor(Math.random() * 10000)}`,
      specType: 1,
      name: `测试商品${i + 1}`,
      sourceType: "ONLINE",
      erpCodeList: [`2065${Math.floor(Math.random() * 10000)}`],
    });
  }
  return items;
}

// 构造并执行curl命令
function executeCurl() {
  const items = generateItems(3000);
  console.log('打印日志看看-items:', items)
  const data = {
    promotionId: "SP00000362065",
    itemListData: items,
  };

  const curlCommand = `curl -s 'http://localhost:3000/api/v1/promotion/activity/add-items' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: zh-CN,zh;q=0.9' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -b '_lxsdk_cuid=18fcc866567c8-05b8771a006647-1a525637-1fa400-18fcc866567c8; _lxsdk=18fcc866567c8-05b8771a006647-1a525637-1fa400-18fcc866567c8; _lxsdk_s=19582f07758-092-9a1-2e1%7C%7C11; JSESSIONID=16p613byv5gjr1mi0tvqxkw0r3; webNewUuid=1362744251c33ab35649fd5ab1b6496f_1745397618968; wmempid=60472463; WEBDFPID=x8x2284823v55z091uwu5yz0u2vuvy718042u2uz9v05795839912578-1745810508869-1741600822544MQGCYIQ75613c134b6a252faa6802015be905511551; token=eAGFjyFLREEUhR0sq0HEbHjBIBtk586dOzM2TUbBBcEi9867YxB2wxMsmzYaVIxicZPNun_Df6DFRUUQDGLzGcy2U77zndMxyxffr6vV-9fnwwxgUXsgNaly3Kwoa_LFAZUYMCizA-6Kj4quZ7PF7XuzsrCvspd1oKNq8nHz8gbrBv4F469y5_ZxejeD3cun6fkzjM3clen8lV2bDesIAiJ4m51jcZ4wldqzWGkTlUMb0LsUyMZEcWLWTlVG7WLpEWfvrCJIiIlFo1KLlYgSDyqlwMFisdIF9DVGSIkQ6uDbV8g8NktHerKVszZNf3isgzMz3zTDH10RXaI**eAENyEkRADAIBDBLlAHKyuH0L6H9ZWK-kpplMNOVmuv65cwWsCKmwB0lKTRyICfbO3V_nQ48KJkRRw**VA2TF-rVkgptasWQMLFwQ6IEytQg4m1qzxFHZz6zP70v56p33uO8RViU0I9snFV2cO4d13BFXB3tz-Q2tlHoeg**NjA0NzI0NjMsaHVhbmd5YW5sb25nMDIs6buE5b2m6b6ZLGh1YW5neWFubG9uZzAyQHRlc3QuY29tLDEsMzQwNDcxNDYsMTc0NTgwNzUzOTE4MQ; shangou_yunying_token=eAGFjyFLREEUhR0sq0HEbHjBIBtk586dOzM2TUbBBcEi9867YxB2wxMsmzYaVIxicZPNun_Df6DFRUUQDGLzGcy2U77zndMxyxffr6vV-9fnwwxgUXsgNaly3Kwoa_LFAZUYMCizA-6Kj4quZ7PF7XuzsrCvspd1oKNq8nHz8gbrBv4F469y5_ZxejeD3cun6fkzjM3clen8lV2bDesIAiJ4m51jcZ4wldqzWGkTlUMb0LsUyMZEcWLWTlVG7WLpEWfvrCJIiIlFo1KLlYgSDyqlwMFisdIF9DVGSIkQ6uDbV8g8NktHerKVszZNf3isgzMz3zTDH10RXaI**eAENyEkRADAIBDBLlAHKyuH0L6H9ZWK-kpplMNOVmuv65cwWsCKmwB0lKTRyICfbO3V_nQ48KJkRRw**VA2TF-rVkgptasWQMLFwQ6IEytQg4m1qzxFHZz6zP70v56p33uO8RViU0I9snFV2cO4d13BFXB3tz-Q2tlHoeg**NjA0NzI0NjMsaHVhbmd5YW5sb25nMDIs6buE5b2m6b6ZLGh1YW5neWFubG9uZzAyQHRlc3QuY29tLDEsMzQwNDcxNDYsMTc0NTgwNzUzOTE4MQ; ssoid=eAGFjyFLREEUhR0sq0HEbHjBIBtk586dOzM2TUbBBcEi9867YxB2wxMsmzYaVIxicZPNun_Df6DFRUUQDGLzGcy2U77zndMxyxffr6vV-9fnwwxgUXsgNaly3Kwoa_LFAZUYMCizA-6Kj4quZ7PF7XuzsrCvspd1oKNq8nHz8gbrBv4F469y5_ZxejeD3cun6fkzjM3clen8lV2bDesIAiJ4m51jcZ4wldqzWGkTlUMb0LsUyMZEcWLWTlVG7WLpEWfvrCJIiIlFo1KLlYgSDyqlwMFisdIF9DVGSIkQ6uDbV8g8NktHerKVszZNf3isgzMz3zTDH10RXaI**eAENyEkRADAIBDBLlAHKyuH0L6H9ZWK-kpplMNOVmuv65cwWsCKmwB0lKTRyICfbO3V_nQ48KJkRRw**VA2TF-rVkgptasWQMLFwQ6IEytQg4m1qzxFHZz6zP70v56p33uO8RViU0I9snFV2cO4d13BFXB3tz-Q2tlHoeg**NjA0NzI0NjMsaHVhbmd5YW5sb25nMDIs6buE5b2m6b6ZLGh1YW5neWFubG9uZzAyQHRlc3QuY29tLDEsMzQwNDcxNDYsMTc0NTgwNzUzOTE4MQ; logan_session_token=5yemcu744bpl5jcg0o1m; _app_id=3; _biz_app_id=2; _et=ZYGLvzWUsejvN7dQtfWEYZ_CY8csiPF59y-atLYfqPDEECQlp5vlyBn6SSScvm66-tRj5YlYD86dPX_ZTDEFoA; _qnh_tenant_id=1010327; _qnh_account_id=97104' \
  -H 'Origin: http://localhost:3000' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:3000/home.html' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36' \
  -H 'qnhReferrer: /saasPromotion/activity/x_discount/create' \
  -H 'sec-ch-ua: "Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
    --data-raw '${JSON.stringify(data)}'`;

  exec(curlCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`执行错误: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`输出: ${stdout}`);
  });
}

// 执行
executeCurl();
