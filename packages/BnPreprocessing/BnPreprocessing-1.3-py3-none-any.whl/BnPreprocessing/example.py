import BnPreprocessing as pp
s =  "আমরা কাজ করবো কিভাবে?😦😦 Document তৈরী করতে আমাদের সবাইকে কি করতে হবে? নিজেদের(গ্রুপ-৬ এর সবাই) মধ্যে  কাজ ভাগ করবো কেমনে?"
s = pp.remove_punc(s)
print(s)
s = pp.remove_nonBangla(s)
print(s)
s = pp.remove_emoticons(s)
print(s)
s = pp.remove_sw(s)
print(s)