## upmath-1.3 (universal precision mathematics)

**Description:** This python package contains a number class that supports 
high precision calculation and various number-bases like **2**, **8**, **10**, **16**, 
**32** and **64**. Numbers are correct to the precision (significant digits) set 
by the user. Numbers of different bases are equivalent and interconvertible. 
Converting a number to a higher base saves memory space and load on network traffic 
when it is sent from one machine to another over the computer network.

Both the integers and floating point numbers are supported by all the numbers of 
mentioned bases. Since it supports binary, octal, denary, hexadecimal, base-32 and
base-64 numbers equivalently, that's why, they are called *'universal'*. 

All the standard mathematical functions are rewritten to support the high precision
feature. Mathematical operators are also redefined so. That's why, this package is 
called universal precision mathematics (upmath).

### Examples
Universal precision numbers (upn) are accurate to the given precision. Default
precision is 36.
```python
>>> 
>>> import upmath
>>> import upmath.pE as pe
>>> upmath.e
b10:2.7182818284590452353602874713526625
>>> pe.getE(prec=200)
b10:2.7182818284590452353602874713526624977572470936999595749669676277240766303535475
9457138217852516642742746639193200305992181741359662904357290033429526059563073813232
8627943490763233829880753195251019
>>> 
>>> 
>>> upmath.PI
b10:3.14159265358979323846264338327950288
>>> import upmath.pi as pi
>>> pi.getPI(prec=200)
b10:3.1415926535897932384626433832795028841971693993751058209749445923078164062862089
9862803482534211706798214808651328230664709384460955058223172535940812848111745028410
2701938521105559644622948954930382
>>> 
```
Mathematical operations are able to create the numbers correct to the given precision.
```python
>>> a=upn.Number('998001',prec=500)
>>> a.inv()
b10:0.00000100200300400500600700800901001101201301401501601701801902002102202302402502
60270280290300310320330340350360370380390400410420430440450460470480490500510520530540
55056057058059060061062063064065066067068069070071072073074075076077078079080081082083
08408508608708808909009109209309409509609709809910010110210310410510610710810911011111
21131141151161171181191201211221231241251261271281291301311321331341351361371381391401
4114214314414514614714814915015115215315415515615715815916016116216316416516616716
>>> 
```
All numbers are returned and manipulated in **string** format. It can handle integer 
and floating point numbers of any base from 2,8,10,16,32,64. This package can process
any number from ultra small to ultra large level.
```python
>>> 
>>> import upmath.Number as upn
>>> a=upn.Number('-1.6e-2020')
>>> b=upn.Number('4.85e+2020')
>>> a
b10:-1.6e-2020
>>> b
b10:4.85e+2020
>>> 
>>> a+1
b10:0.99999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
9999999999999999999999999999999999999999999999984
>>> 
```

The central number system is binary and denary. Numbers of bases 8,16,32 and 64 are 
converted efficiently through binary. Arithmetic and other mathematical operations 
are performed by denary (base10) operations.
```python
>>> 
>>> a=upn.Number('hello.world',64)
>>> a.getDenaryForm()
'b10:288970072.505963635630905628204345703125'
>>> a.getBinaryForm()
'b02:10001001110010101010101011000.100000011000011011010101001101'
>>> a.getOctalForm()
'b08:2116252530.4030332515'
>>> a.getHexadecimalForm()
'b16:11395558.8186d534'
>>> a.getBase32Form()
'b32:8jilao.g63dad'
>>> 
```

Number data are stored in a dictionary data format. For example,
```python
>>> a=upn.Number('15.27')
>>> a.getDict()
{'base': 10, 'input_mode': 'fp', 'sign': '+', 'ipart': '15', 'fpart': '27', 'exp': 0,
 'prec': 4, 'max_prec': 18, 'is_accurate': True, 'normalized': {'sign': '+',
 'ipart': '15', 'fpart': '27', 'is_accurate': True}, 'is_integer': False,
 'is_float': True, 'normal_prec': 4}
>>> 
```

| Base | Number System | Example | Digits |
| --- | --- | --- | --- |
| Base=2 | Binary | b02:-11001.011p600 | 0,1 |
| Base=8 | Octal | b08:-4572.0273p-600 | 0-7 |
| Base=10 | Denary | b10:-9078.0412p40 | 0-9 |
| Base=16 | Hexadecimal | b16:-f04d.32abp70 | 0-9a-fA-F |
| Base=32 | DuoTrigesimal | b32:-vV0o.25f9p+147 | 0-9a-vA-V |
| Base=64 | Base-64 | b64:-zXo0.a4Btp-250 | 0-9a-zA-Z!@ |


Number input modes:'fp' and 'fr'
    fp' (floating point) mode means numbers with floating digits.
        Like:b02:-11110001.11p-10,b10:92.45e33
    'fr' (fractional) mode which displays number as mixed or proper fraction.
        Like:b02:-11110001 11/100p+17, b10:92 9/20e+23.
    Difference: 'fp' numbers contain '.', but 'fr' numbers have '/'.

Valid Input Format:
(fp)11110.101,'11110.101p+34','11110.101p34','11110.101p-23','-0.1101p-45'
(fr) '-1101 11/1101', "-1101 11/1101p+7", "-1101 11/1101p7", '-1101 11/1101p-17'

Default base is 10. If base is not given in the number definition, it is automatically 
assumed 10.
```python
>>> 
>>> a=upn.Number('24 5/7p-5')
>>> a
b10:24 5/7e-5
>>> a+1
b10:1.0002471428571428571428571
>>> a*1
b10:0.0002471428571428571428571
>>> 
```

If a floating or fractional number is recurring, 'upn' can handle it
very efficiently just by setting modify or ultraModify argument 'True'. modify() 
method and ultraModify() method also do the same job. These methods or arguments can 
also convert the improper fractions to proper fraction with necessary simplifications.
```python
>>> 
>>> a=upn.Number('245.20451045104510451',modify=True)
>>> a
b10:245 1859/9090
>>> 
>>> a=upn.Number('245.20451045104510451')
>>> a
b10:245.20451045104510451
>>> a.modify()
>>> a
b10:245 1859/9090
>>> 
>>> b=upn.Number('245/37',modify=True)
>>> b
b10:6 23/37
>>> c=upn.Number('-30 245/35',modify=True)
>>> c
b10:-37
>>> d=upn.Number('-30 245/45',modify=True)
>>> d
b10:-35 4/9
>>> 
```
### Arithmetic operations
Addition(+), subtraction(-), multiplication(*), division(/), floor division(//), 
remainder or mod operation(%), power operation(**) etc. can be done very easily.
```python
>>> 
>>> a=upn.Number('12.45')     #denary number
>>> b=upn.Number('-2 3/5')    #denary number
>>> c=upn.Number('1101.11',2) #binary number
>>> d=upn.Number('2 3/5',8)   #octal number
>>> a+b
b10:9.85
>>> a+2.45
b10:14.9
>>> 10-a
b10:-2.45
>>> 5+b
b10:2 2/5
>>> c*2.5
b10:34.375
>>> 30/a
b10:2.4096385542168674698795180722891566265
>>> a/0
b10:<INF>
>>> b/0
b10:<-INF>
>>> 30//a
b10:2
>>> 30%a
b10:5.1
>>> a.power(2.5)
b10:546.919462835080042646792227676322546
>>> a**2.5
b10:546.919462835080042646792227676322546
>>> 5**a
b10:503705338.789256548289543848618036647
>>> b.power(-2.5)
b10:<UNDEFINED>
>>> b**-2.5
b10:<UNDEFINED>
>>> c**2.5
b10:701.062513233261888120374289325692407
>>> 2.5**c
b10:296261.433052663007815877972404231589
>>> c.power(-2.5)
b10:0.00142640632058338821552976539808037757
>>> c**-2.5
b10:0.00142640632058338821552976539808037757
>>> 2.5**upn.Number('4.5')
b10:61.7632355501636588281033895397015339
>>> 2**upn.Number('-4.5')
b10:0.044194173824159220275052772631553065
>>> 

```

### Logical operations
Logical operations like equal-to(==), not-equal-to(!=), greater-than(>),
less-than(<), greater-than-or-equal-to(>=) and less-than-or-equal-to(<=)
can be performed on universal precision number objects as simple as done
with the normal numbers. 'True' or 'False' are returned.

```python
>>> 
>>> a=upn.Number('-2.5')
>>> b=upn.Number('-10.1',2)
>>> c=upn.Number('ab c/d',16)
>>> d=upn.Number('f.10z',64)
>>> 
>>> a==b
True
>>> a>b
False
>>> c<d
False
>>> d>b
True
>>> a!=b
False
>>> c>a
True
>>> a>=b
True
>>> a<10
True
>>> 10>a
True
>>> 20>=c
False
>>> 20>=d
True
>>> 
>>> 
```

### In-Place assignment operations
In-place assignment operations like +=, -=, *=, /=, //=, %= are also
supported in this number system.

|operator|operation|
|---|---|
|+=|Operands are added first, then the result is assigned to the left operand|
|-=|Right Operand is subtracted from the left, then the result is assigned to the left operand|
|*=|Operands are multiplied first, then the result is assigned to the left operand|
|/=|Left operand is divided by the right one, then the result is assigned to the left operand|
|//=|Left operand is divided by the right one, then the floor value of quotient is assigned to the left operand|
|%=|Left operand is divided by the right one, then the remainder is assigned to the left operand|

```python
>>> 
>>> a=upn.Number('-2.5')
>>> b=upn.Number('10.75')
>>> c=upn.Number('13.25',8)
>>> 
>>> a+=b
>>> a
b10:8.25
>>> 
>>> a-=b
>>> a
b10:-2.5
>>> 
>>> a*=c
>>> a
b10:-28.3203125
>>> b/=c
>>> b
b10:0.9489655172413793103448275862068965517
>>> 
>>> b=upn.Number('10.75')
>>> c//=b
>>> c
b10:1
>>> c=upn.Number('13.25',8)
>>> c%=b
>>> c
b10:0.578125
>>> 
```

### Standard mathematical operations
Logarithmic, exponential, trigonometric, hyperbolic, gamma, beta and error
functions are executed efficiently with this 'upn' number system

#### Inverse, factorial, logarithmic, exponential, square-root and power operations
```python
>>> 
>>> a=upn.Number('-2.5')
>>> a.inv()
b10:-0.4
>>> b=upn.Number('7')
>>> b.fact()
b10:5040
>>> 
>>> a.ln()
b10:<UNDEFINED>
>>> 
>>> a=upn.Number('3 4/7')
>>> a.ln() # ln(a)
b10:1.27296567581288744409616592300919555
>>> a.ln(prec=50)
b10:1.2729656758128874440961659230091955494141179789552
>>> 
>>> a=upn.Number('-2.5')
>>> b=upn.Number('4.75')
>>> b.ln()        # ln(b)
b10:1.5581446180465498411745631889715004
>>> b.lg()        #log(b,base=10)
b10:0.676693609624866571108855686307943264
>>> b.log(base=2) #log(b,base=2)
b10:2.24792751344358549379351942290683442
>>> 
>>> a.exp()       #e^a
b10:0.0820849986238987951695286744671598078
>>> b.exp()       #e^b
b10:115.584284527187658133414267136529079
>>> 
>>> a.power(b)    #a^b
b10:<UNDEFINED>
>>> b.power(a)    #b^a
b10:0.020336020730908522185680627421418239
>>> 
>>> a=upn.Number('-2 1/2')
>>> b=upn.Number('4 3/4')
>>> a.sqrt()
b10:<UNDEFINED>
>>> b.sqrt()
b10:2.17944947177033677611849099192980783
>>> 
>>> a.power(b)
b10:<UNDEFINED>
>>> b.power(a)
b10:0.020336020730908522185680627421418239
>>> 
```

#### Trigonometric and inverse trigonometric functions

```python
>>> 
>>> a=upn.Number('0')
>>> b=upn.Number('390')
>>> c=upn.Number('-405')
>>> d=upn.Number('540')
>>> e=upn.Number('-90')
>>> 
>>> a.sin()
b10:0
>>> b.sin()
b10:0.5
>>> c.sin()
b10:-0.707106781186547524400844362104849039
>>> d.sin()
b10:0
>>> e.sin()
b10:-1
>>> 
>>> a.tan()
b10:0
>>> c.tan()
b10:-1
>>> d.tan()
b10:0
>>> e.tan()
b10:<-INF>
>>> c.cosec()
b10:-1.41421356237309504880168872420969808
>>> d.sec()
b10:-1
>>> e.cot()
b10:0
>>> 
>>> a=upn.Number('0')
>>> b=upn.Number('1')
>>> c=upn.Number('-1')
>>> 
>>> a.asin()
b10:0
>>> a.acos()
b10:90
>>> 
>>> b.asin()
b10:90
>>> b.acos()
b10:0
>>> 
>>> b.acot(unit='rad')
b10:0.78539816339744830961566084581987572
>>> b.acot(unit='d')
b10:-45
>>> 
>>> c.acot()
b10:45
>>> c.atan()
b10:-45
>>> 
```
#### Hyperbolic and inverse hyperbolic functions
```python
>>> 
>>> a=upn.Number('2')
>>> b=upn.Number('-2')
>>> c=upn.Number('0')
>>> 
>>> a.sinh()
b10:3.6268604078470187676682139828012617
>>> a.cosh()
b10:3.76219569108363145956221347777374611
>>> b.tanh()
b10:-0.96402758007581688394641372410092315
>>> c.coth()
b10:0
>>> a.sech()
b10:0.265802228834079692120862739819888972
>>> b.cosech()
b10:-0.275720564771783207758351482163027121
>>> 
>>> a=upn.Number('2')
>>> b=upn.Number('0.5')
>>> c=upn.Number('0')
>>> 
>>> a.asinh()
b10:1.44363547517881034249327674027310527
>>> a.acosh()
b10:1.31695789692481670862504634730796844
>>> b.atanh()
b10:0.549306144334054845697622618461262852
>>> c.atanh()
b10:0
>>> a.acoth()
b10:0.549306144334054845697622618461262852
>>> b.asech()
b10:1.31695789692481670862504634730796844
>>> c.acosech()
b10:<INF>
>>>
```

#### Gamma, beta and error functions
Gamma and beta functions give accurate answers for positive whole
numbers and approximate values for floating point numbers.

```python
>>> a=upn.Number('-1')
>>> b=upn.Number('2')
>>> c=upn.Number('0')
>>> 
>>> b.gamma()
b10:1
>>> d=upn.Number('2.5')
>>> d.gamma()
b10:1.32934038817913766044178571868836165
>>> b.beta()
b10:0.5
>>> c.beta()
b10:<INF>
>>> 
>>> a.erf()
b10:-0.842700792949714869341220635082609259
>>> a.erfc()
b10:1.84270079294971486934122063508260926
>>> b.erfc()
b10:0.00467773498104726583793074363274707222
>>> b.erf()
b10:0.995322265018952734162069256367252928
>>> c.erf()
b10:0
>>> c.erfc()
b10:1
>>> d.erf()
b10:0.999593047982555041060435784260025087
>>> d.erfc()
b10:0.000406952017444958939564215739974912563
>>> 
```

#### Euler, Bernoulli and Tangent numbers
For odd positive integers, these numbers are zero.

```python
>>> 
>>> a=upn.Number('2')
>>> b=upn.Number('3')
>>> c=upn.Number('7')
>>> d=upn.Number('8')
>>> e=upn.Number('9')
>>> 
>>> a.eulerNumber()
b10:-1
>>> b.eulerNumber()
b10:0
>>> c.eulerNumber()
b10:0
>>> d.eulerNumber()
b10:1385
>>> e.eulerNumber()
b10:0
>>> 
>>> a.bernoulliNumber()
b10:1/6
>>> b.bernoulliNumber()
b10:0
>>> c.bernoulliNumber()
b10:0
>>> d.bernoulliNumber()
b10:-1/30
>>> e.bernoulliNumber()
b10:0
>>> 
>>> a.tangentNumber()
b10:1
>>> b.tangentNumber()
b10:0
>>> c.tangentNumber()
b10:0
>>> d.tangentNumber()
b10:272
>>> e.tangentNumber()
b10:0
>>> 
```

### Precision Standard Mathematical Functions (PSMF) in tabular presentation
UPN (universal precision number) is a class instance. Denary integers
anf floating numbers cannot use the methods of UPN class. PSMF module can
perform math operations direcly onto integers and floating numbers.

```python
>>> 
>>> import upmath.psmf as smf
>>> smf.nCr(10,7)
b10:120
>>> smf.fact(15)
b10:1307674368000
>>> 
>>> smf.power(2,10)
b10:1024
>>> 
>>> smf.e
b10:2.7182818284590452353602874713526625
>>> smf.E
b10:2.7182818284590452353602874713526625
>>> smf.PI
b10:3.14159265358979323846264338327950288
>>> 
```
**Short descriptions of PSMFs**
|Function|Arguments|Domain and Return|
|---|---|---|
|dataType(x=None)|x=variable|type-string returned|
|fact(n)|n=positive integer;|factorial of n|
|nCr(n=None,r=None)|n=integer;r=integer;n>r|integer; No of combinations|
|nPr(n=None,r=None)|n=integer;r=integer;n>r|integer; No of permutations|
|ln(x=None,prec=36)|x={R:x>=0};prec=positive integer|natural logarithm of x is returned|
|lg(x=None,prec=36)|x={R:x>=0};prec=positive integer|10-based logarithm of x is returned|
|log(x=None,base=10,prec=36)|x={R:x>=0};prec=positive integer|logarithm of x of given base is returned|
|exp(x=None,prec=36)|x={R};prec=positive integer|exponential of x is returned|
|sqrt(x=None,prec=36)|x={R:x>=0};prec=positive integer|square root of x is returned|
|power(x=None,y=None,prec=36)|x=base {R:x>=0};y=power;prec=positive integer|x^y is returned|
|sin(x=None,unit='d',prec=36)|x=angle{R};unit=unit of angle ('d','D','degre','Degre','r','R','c','rad','Rad','radian','Radian');prec=positive integer|sin of x is returned|
|cos(x=None,unit='d',prec=36)|x=angle{R};unit=unit of angle ('d','D','degre','Degre','r','R','c','rad','Rad','radian','Radian');prec=positive integer|cos of x is returned|
|tan(x=None,unit='d',prec=36)|x=angle{R};unit=unit of angle ('d','D','degre','Degre','r','R','c','rad','Rad','radian','Radian');prec=positive integer|tan of x is returned|
|cot(x=None,unit='d',prec=36)|x=angle{R};unit=unit of angle ('d','D','degre','Degre','r','R','c','rad','Rad','radian','Radian');prec=positive integer|cot of x is returned|
|sec(x=None,unit='d',prec=36)|x=angle{R};unit=unit of angle ('d','D','degre','Degre','r','R','c','rad','Rad','radian','Radian');prec=positive integer|sec of x is returned|
|cosec(x=None,unit='d',prec=36)|x=angle{R};unit=unit of angle ('d','D','degre','Degre','r','R','c','rad','Rad','radian','Radian');prec=positive integer|cosec of x is returned|
|asin(x=None,unit='d',prec=36)|x={R:-1<=x<=1};unit=unit of output angle ('d','D','degre','Degre','r','R','c','rad','Rad','radian','Radian');prec=positive integer|sin inverse of x is returned|
|acos(x=None,unit='d',prec=36)|x={R:-1<=x<=1};unit=unit of output angle ('d','D','degre','Degre','r','R','c','rad','Rad','radian','Radian');prec=positive integer|cos inverse of x is returned|
|atan(x=None,unit='d',prec=36)|x={R:-PI/2<=x<=PI/2};unit=unit of output angle ('d','D','degre','Degre','r','R','c','rad','Rad','radian','Radian');prec=positive integer|tan inverse of x is returned|
|acot(x=None,unit='d',prec=36)|x={R:-PI/2<=x<=PI/2};unit=unit of output angle ('d','D','degre','Degre','r','R','c','rad','Rad','radian','Radian');prec=positive integer|cot inverse of x is returned|
|asec(x=None,unit='d',prec=36)|x={R:-1>x>1};unit=unit of output angle ('d','D','degre','Degre','r','R','c','rad','Rad','radian','Radian');prec=positive integer|sec inverse of x is returned|
|acosec(x=None,unit='d',prec=36)|x={R:-1>x>1};unit=unit of output angle ('d','D','degre','Degre','r','R','c','rad','Rad','radian','Radian');prec=positive integer|cosec inverse of x is returned|
|sinh(x=None,prec=36)|x={R};prec=positive integer|hyperbolic sin of x is returned;Range:{R}|
|cosh(x=None,prec=36)|x={R};prec=positive integer|hyperbolic cos of x is returned;Range:{R}|
|tanh(x=None,prec=36)|x={R};prec=positive integer|hyperbolic tan of x is returned;Range:{R:-PI/2<=f(x)<=PI/2}|
|coth(x=None,prec=36)|x={R};prec=positive integer|hyperbolic cot of x is returned;Range:{R:-1<=f(x)<=1}|
|sech(x=None,prec=36)|x={R};prec=positive integer|hyperbolic sec of x is returned;Range:{R}|
|cosech(x=None,prec=36)|x={R};prec=positive integer|hyperbolic cosec of x is returned;Range:{R}|
|asinh(x=None,prec=36)|x={R};prec=positive integer|hyperbolic sin inverse of x is returned;Range:{R}|
|acosh(x=None,prec=36)|x={R};prec=positive integer|hyperbolic cos inverse of x is returned;Range:{R}|
|atanh(x=None,prec=36)|x={R:-1>=x>=1};prec=positive integer|hyperbolic tan inverse of x is returned;Range:{R}|
|acoth(x=None,prec=36)|x={R:-1>=x>=1};prec=positive integer|hyperbolic cot inverse of x is returned;Range:{R}|
|asech(x=None,prec=36)|x={R:1>=x>=0};prec=positive integer|hyperbolic sec inverse of x is returned;Range:{R}|
|acosech(x=None,prec=36)|x={R:1>=x>=0};prec=positive integer|hyperbolic cosec inverse  of x is returned;Range:{R}|
|gamma(x=None,prec=36)|x={R:x>0};prec=positive integer|gamma of x is returned;Range:{R:f(x)>=0}|
|beta(x=None,y=None,prec=36)|x={R:x>0};y={R:y>0};prec=positive integer|beta of x and y is returned;Range:{R:1>=f(x)>=0}|
|erf(x=None,prec=36)|x={R};prec=positive integer|error-function of x is returned;Range:{R:-1=<f(x)<=1}|
|erfc(x=None,prec=36)|x={R};prec=positive integer|complementary error-function of x is returned;Range:{R:0=<f(x)<=2}|
|eulerNumber(r=None)|r=positive integer|if r is odd, 0(zero) is returned;otherwise integer returned|
|bernoulliNumber(r=None)|r=positive integer|if r is odd, 0(zero) is returned;otherwise fraction is returned|
|tangentNumber(r=None)|r=positive integer|if r is odd, 0(zero) is returned;otherwise integer returned|





















 



