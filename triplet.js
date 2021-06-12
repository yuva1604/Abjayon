function Triplet(arr1, arr2, arr3, n)
    {
        arr1.sort(function(a, b){return a - b});
        arr2.sort(function(a, b){return a - b});
        arr3.sort(function(a, b){return a - b});
        let res_min = 0;
        let res_max = 0;
        let res_mid = 0;
        let i = 0, j = 0, k = 0;
        let diff = 22222;
           
        while (i < n && j < n && k < n)
        {
            let sum = arr1[i] + arr2[j] + arr3[k];
            let max = maximum(arr1[i], arr2[j], arr3[k]);
            let min = minimum(arr1[i], arr2[j], arr3[k]);
            if (min == arr1[i])
                i++;
            else if (min == arr2[j])
                j++;
            else
                k++;
            if (diff > (max - min))
            {
                diff = max - min;
                res_max = max;
                res_mid = sum - (max + min);
                res_min = min;
            }
        }
        console.log(res_max + ", " + res_mid + ", " + res_min);
    }
    function minimum(p,q,r)
    {
        return Math.min(Math.min(p,q), r);
    }
     function maximum(p,q,r)
    {
        return Math.max(Math.max(p,q), r);
    }
    let arr1 = [5, 2, 8];
    let arr2 = [10, 7, 12];
    let arr3 = [9, 14, 6];
    let n = arr1.length;

    Triplet(arr1, arr2, arr3, n);